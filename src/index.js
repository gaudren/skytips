import { delegate } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './index.css';
import cards from './carddb.json';

async function fetchCardDatabase() {
  return cards;
}

function autolink() {
  const found = document.evaluate('.//text()[contains(., "{{")][contains(., "}}")]', document.body, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

  const re = /({{[^{}]+}})/g;

  for (let ii = 0; ii < found.snapshotLength; ii++) {
    const item = found.snapshotItem(ii);
    const parts = item.data.split(re);

    for (let jj = 0; jj < parts.length; jj++) {
      if (re.test(parts[jj])) {
        const original = parts[jj];
        parts[jj] = document.createElement('span');
        parts[jj].classList.add('skytips');
        parts[jj].textContent = original.substring(2, original.length - 2);
      }
    }
    item.replaceWith.apply(item, parts);
  }
}

function onLoaded(cardDatabase, options) {
  delegate('body', {
    target: '*[data-skytips-card], .skytips',
    placement: 'bottom',
    content: (reference) => {
      if (reference.tagName.toLowerCase() === 'body') {
        return;
      }

      let cardName = reference.dataset.skytipsCard;
      if (!cardName) {
        cardName = reference.innerText.trim();
      }

      const cardSlug = cardName.replace(/[^a-zA-Z]/g, '-').toLowerCase();
      console.log(cardSlug);

      const img = document.createElement('img');
      img.style.width = '250px';
      img.style.marginRight = '10px';
      img.src = `https://assets.skyweaver.net/latest/full-cards/6x/${cardDatabase[cardSlug]}.png`;
      img.alt = cardName;

      return img;
    }
  });
  const enableAutolink = options?.autolink;
  if (enableAutolink) {
    autolink();
  }
}

function skytips(options = {}) {
  const dbPromise = fetchCardDatabase();
  const go = async() => {
    onLoaded(await dbPromise, options);
  };

  if (document.readyState !== 'loading') {
    go();
  } else {
    document.addEventListener('DOMContentLoaded', go);
  }
}

window.skytips = skytips;
