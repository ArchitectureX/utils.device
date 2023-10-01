import { afterEach, beforeEach, describe, expect, it } from '@jest/globals'

import device from '../index'

const originalNavigator = global.navigator
const originalWindow = global.window

describe('device', () => {
  describe('Client-side scenarios', () => {
    beforeEach(() => {
      Object.defineProperty(global, 'navigator', {
        value: {
          userAgent:
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          language: 'en-US',
          languages: ['en-US', 'en']
        },
        writable: true,
        configurable: true
      })
    })

    it('should detect Chrome browser', () => {
      // Assuming you have a function to detect Chrome
      expect(device.is('chrome')).toBeTruthy()
    })

    it('should detect English language', () => {
      expect(device.language()).toBe('en-US')
    })
  })

  describe('Server-side scenarios', () => {
    beforeEach(() => {
      Object.defineProperty(global, 'navigator', {
        value: undefined,
        writable: true
      })
      Object.defineProperty(global, 'window', {
        value: undefined,
        writable: true
      })
    })

    it('detects device type from userAgent', () => {
      const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_3 like Mac OS X)'
      expect(device.type(userAgent)).toBe('Mobile')
    })

    it('detects language from headers', () => {
      const headers = {
        'accept-language': 'es-ES,es;q=0.9,en;q=0.8,de;q=0.7'
      }
      expect(device.language(headers)).toBe('es-ES')
    })

    it('detects languages from headers', () => {
      const headers = {
        'accept-language': 'es-ES,es;q=0.9,en;q=0.8,de;q=0.7'
      }
      expect(device.languages(headers)).toEqual(['es-ES', 'es', 'en', 'de'])
    })

    afterEach(() => {
      Object.defineProperty(global, 'navigator', {
        value: originalNavigator,
        writable: true
      })
      Object.defineProperty(global, 'window', {
        value: originalWindow,
        writable: true
      })
    })
  })

  describe('orientation', () => {
    // Reset the global window object dimensions after each test
    afterEach(() => {
      Object.defineProperty(global.window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1280
      })
      Object.defineProperty(global.window, 'innerHeight', {
        writable: true,
        configurable: true,
        value: 720
      })
    })

    it('should detect Portrait orientation', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 720 })
      Object.defineProperty(global.window, 'innerHeight', { value: 1280 })
      expect(device.orientation()).toBe('Portrait')
    })

    it('should detect Landscape orientation', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 1280 })
      Object.defineProperty(global.window, 'innerHeight', { value: 720 })
      expect(device.orientation()).toBe('Landscape')
    })
  })

  describe('brand', () => {
    // Backup of the original navigator
    const originalNavigator = { ...global.navigator }

    afterEach(() => {
      global.navigator = originalNavigator // Restore original navigator after each test
    })

    it('should detect Microsoft for Windows Phone userAgent', () => {
      global.navigator = Object.create(navigator, {
        userAgent: {
          value: 'Mozilla/5.0 (Windows Phone; ...)',
          enumerable: true
        }
      })
      expect(device.brand()).toBe('Microsoft')
    })

    it('should detect Apple for iPhone userAgent', () => {
      global.navigator = Object.create(navigator, {
        userAgent: {
          value: 'Mozilla/5.0 (iPhone; ...)',
          enumerable: true
        }
      })
      expect(device.brand()).toBe('Apple')
    })

    it('should detect Android for Android userAgent', () => {
      global.navigator = Object.create(navigator, {
        userAgent: {
          value: 'Mozilla/5.0 (Android; ...)',
          enumerable: true
        }
      })
      expect(device.brand()).toBe('Android')
    })

    //... Add similar tests for other brands.

    it('should return null for unknown userAgent', () => {
      global.navigator = Object.create(navigator, {
        userAgent: {
          value: 'UnknownUserAgent',
          enumerable: true
        }
      })
      expect(device.brand()).toBeNull()
    })
  })
})
