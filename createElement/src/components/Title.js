'use strict'

import createElement from '../utils/createElement.js'

/**
 *
 * @param {string} title
 * @returns instance of HTMLElement (h1)
 */
export const Title = title => createElement('h1', { class: 'title' }, [title])
