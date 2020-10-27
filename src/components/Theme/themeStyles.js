/* [Theme Styling]
* 1. Defaults
* 2. Header
* 3. Drawer & Navigation
* 4. Hero
* 5. Blocks & Cards
* 6. Buttons
* 7. Accent Colors
* 8. Code Styling
* */

export const lightTheme = {
  /**
   * [Defaults]
   */
  white: 'var(--white)',
  black: 'var(--black)',
  scrollBar: 'var(--gray-500)',
  scrollBarHover: 'rgba(128, 90, 213, 0.75)',
  logo: 'var(--gray-900)',
  logoHover: 'var(--gray-600)',
  transHover: 'rgba(128, 90, 213, 0.25)',
  bgBody: 'var(--gray-200)',
  textBody: 'var(--gray-900)',
  /**
   * [Header]
   */
  bgHeader: 'white',
  borderHeader: 'transparent',
  borderContent: 'var(--gray-300)',
  iconHeader: 'var(--gray-800)',
  iconHeaderHover: 'var(--gray-600)',
  /**
   * [Drawer & Navigation]
   */
  bgDrawer: 'var(--gray-50)',
  borderDrawer: 'var(--gray-300)',
  bgDrawerMenu: 'var(--gray-100)',
  bgDrawerNavItem: 'var(--gray-50)',
  bgDrawerNavItemHover: 'var(--gray-100)',
  textDrawerNavItem: 'var(--gray-800)',
  textDrawerNavItemHover: 'var(--gray-900)',
  borderDrawerNavItem: 'var(--gray-200)',
  borderDrawerNavItemHover: '',
  /**
   * [Hero]
   */
  bgHero: 'var(--gray-50)',
  textHero: 'var(--gray-800)',
  textOffsetHero: 'var(--gray-600)',
  textHeadlineHero: 'var(--gray-900)',
  /**
   * [Blocks & Cards]
   */
  bgBlock1: 'white',
  textBlock1: 'var(--gray-200)',
  textOffsetBlock1: 'var(--gray-200)',
  bgHeadlineBlock1: 'var(--gray-100)',
  textHeadlineBlock1: 'var(--gray-800)',
  borderHeadlineBlock1: '#805ad5',
  textHeadlineOffsetBlock1: 'var(--gray-800)',
  bgCardBlock1: 'white',
  borderCardBlock1: 'var(--gray-100)',
  textCardBlock1: 'var(--gray-700)',
  textHeadlineCardBlock1: 'var(--gray-600)',

  bgBlock2: 'var(--gray-100)',
  textBlock2: 'var(--gray-200)',
  textOffsetBlock2: 'var(--gray-200)',
  bgHeadlineBlock2: 'white',
  textHeadlineBlock2: 'var(--gray-800)',
  borderHeadlineBlock2: '#805ad5',
  textHeadlineOffsetBlock2: 'var(--gray-200)',
  bgCardBlock2: 'var(--gray-50)',
  borderCardBlock2: 'var(--gray-200)',
  textCardBlock2: 'var(--gray-500)',
  textHeadlineCardBlock2: 'var(--gray-200)',

  bgBlock3: 'var(--gray-200)',
  textBlock3: 'var(--gray-200)',
  textOffsetBlock3: 'var(--gray-200)',
  bgHeadlineBlock3: 'var(--gray-50)',
  textHeadlineBlock3: 'var(--gray-800)',
  borderHeadlineBlock3: 'var(--accent2)',
  textHeadlineOffsetBlock3: 'var(--gray-200)',
  bgCardBlock3: 'var(--gray-200)',
  borderCardBlock3: 'var(--gray-200)',
  textCardBlock3: 'var(--gray-200)',
  textHeadlineCardBlock3: 'var(--gray-200)',

  bgBlock4: 'var(--gray-200)',
  textBlock4: 'var(--gray-200)',
  textOffsetBlock4: 'var(--gray-200)',
  bgHeadlineBlock4: 'var(--gray-50)',
  textHeadlineBlock4: 'var(--gray-800)',
  borderHeadlineBlock4: 'var(--accent2)',
  textHeadlineOffsetBlock4: 'var(--gray-200)',
  bgCardBlock4: 'var(--gray-200)',
  borderCardBlock4: 'var(--gray-200)',
  textCardBlock4: 'var(--gray-200)',
  textHeadlineCardBlock4: 'var(--gray-200)',
  /**
   * [Buttons]
   */
  bgButton: '#805ad5',
  textButton: 'var(--gray-100)',
  bgButtonHover: '#6b46c1',
  textButtonHover: 'white',
  /**
   * [Accent Colors]
   */
  accent1: 'var(--cyan)',
  accent2: '#805ad5',
  accent1Hover: '',
  accent2Hover: '',
  /**
   * [Code Styling]
   */
  codeFontColor: '#f8f8f2',
  codeFontFamily: 'var(--serif-font)',
  codeBackground: '#272822',
  codeTokenCData: '#708090',
  codeTokenPunctuation: '#f8f8f2',
  codeTokenConstant: '#f92672',
  codeTokenBoolean: '#ae81ff',
  codeTokenLanguage: '#f8f8f2',
  codeTokenAtRule: '#e6db74',
  codeTokenKeyword: '#66d9ef',
  codeTokenRegex: '#fd971f',

}

export const darkTheme = {
  /* Base */
  white: 'var(--black)',
  black: 'var(--white)',

  /* Panels */
  panelBody: '#111',
  panelHeader: '#222',
  panelOffset: '#333',
  panelDark: '#333',
  panelIcon: '#333',
  panelCard: '#444',
  panelCardOffset: '#282828',
  // Misc
  scrollBar: '#9e9e9e',
  /* Borders */
  borderNav: '#333',
  borderDefault: '#444',
  borderDark: '#353535',
  borderHeading: '#666',
  /* Text */
  textNav: '#f5f5f5',
  textHeadline: '#efbb35',
  textBody: '#d5d5d5',
  textOffset: '#aaa',
  textOffset1: '#a5a5a5',
  textOnDark: '#a5a5a5',
  textButton: '#fff',
  /* Hovers */
  hoverNav: 'rgba(0,0,0, 0.2)',
  /* Accents */
  accentPrimary: 'var(--accent2)',
  accentSecondary: 'var(--accent2)',
  /* New */
  theme100: 'var(--gray-100)',
  theme200: 'var(--gray-200)',
  theme300: 'var(--gray-300)',
  theme400: 'var(--gray-400)',
  theme500: 'var(--gray-500)',
  theme600: 'var(--gray-600)',
  theme700: 'var(--gray-700)',
  theme800: 'var(--gray-800)',
  theme900: 'var(--gray-900)',

  /** CODE */
  codeFontColor: '#f8f8f2',
  codeFontFamily: 'var(--serif-font)',
  codeBackground: '#272822',
  codeTokenCData: '#708090',
  codeTokenPunctuation: '#f8f8f2',
  codeTokenConstant: '#f92672',
  codeTokenBoolean: '#ae81ff',
  codeTokenLanguage: '#f8f8f2',
  codeTokenAtRule: '#e6db74',
  codeTokenKeyword: '#66d9ef',
  codeTokenRegex: '#fd971f',

}

export const alt1Theme = {
  /* Base */
  white: 'var(--black)',
  black: 'var(--white)',

  /* Panels */
  panelBody: '#330e0e',
  panelHeader: '#3c1010',
  panelOffset: '#5f1a18',
  panelDark: '#f0f2f3',
  panelIcon: '#7b2222',
  panelCard: '#5f1a18',
  panelCardOffset: '#5f1a18',
  // Misc
  scrollBar: '#7b2222',
  /* Borders */
  borderNav: '#521717',
  borderDefault: '#7b2222',
  borderDark: '#7b2222',
  borderHeading: '#7b2222',
  /* Text */
  textHeadline: 'var(--accent4)',
  textNav: '#f0f2f3',
  textBody: '#ca8165',
  textOffset: '#f0f2f3',
  textOffset1: '#f0f2f3',
  textOnDark: '#f0f2f3',
  textButton: 'var(--accent4)',
  /* Hovers */
  hoverNav: 'rgba(0,0,0, 0.1)',
  /* Accents */
  accentPrimary: '#ca8165',
  accentSecondary: 'var(--accent4)',

  /* New */
  theme100: 'var(--auburn-100)',
  theme200: 'var(--auburn-200)',
  theme300: 'var(--auburn-300)',
  theme400: 'var(--auburn-400)',
  theme500: 'var(--auburn-500)',
  theme600: 'var(--auburn-600)',
  theme700: 'var(--auburn-700)',
  theme800: 'var(--auburn-800)',
  theme900: 'var(--auburn-900)',

  /** CODE */
  codeFontColor: '#f8f8f2',
  codeFontFamily: 'var(--serif-font)',
  codeBackground: '#272822',
  codeTokenCData: '#708090',
  codeTokenPunctuation: '#f8f8f2',
  codeTokenConstant: '#f92672',
  codeTokenBoolean: '#ae81ff',
  codeTokenLanguage: '#f8f8f2',
  codeTokenAtRule: '#e6db74',
  codeTokenKeyword: '#66d9ef',
  codeTokenRegex: '#fd971f',

}

export const alt2Theme = {
  /* Base */
  white: 'var(--black)',
  black: 'var(--white)',

  /* Panels */
  panelBody: 'var(--aqua-400)',
  panelHeader: '#073642',
  panelOffset: '#013948',
  panelDark: '#53c9af',
  panelIcon: 'rgba(0,0,0, 0.3)',
  panelCard: '#002b36',
  panelCardOffset: 'rgba(255,255,255,.03)',
  // Misc
  scrollBar: '#53c9af',
  /* Borders */
  borderNav: 'rgba(0,0,0, 0.3)',
  borderDefault: '#efbb35',
  borderDark: 'rgba(0,0,0, 0.3)',
  borderHeading: 'var(--accent2)',
  /* Text */
  textNav: '#f5f5f5',
  textHeadline: '#53c9af',
  textBody: '#2aa198',
  textOffset: '#efbb35',
  textOffset1: '#efbb35',
  textOnDark: '#efbb35',
  textButton: '#fff',
  /* Hovers */
  hoverNav: 'rgba(0,0,0, 0.2)',
  /* Accents */
  accentPrimary: 'var(--accent2)',
  accentSecondary: '#efbb35',

  /* New */
  theme100: 'var(--aqua-100)',
  theme200: 'var(--aqua-200)',
  theme300: 'var(--aqua-300)',
  theme400: 'var(--aqua-400)',
  theme500: 'var(--aqua-500)',
  theme600: 'var(--aqua-600)',
  theme700: 'var(--aqua-700)',
  theme800: 'var(--aqua-800)',
  theme900: 'var(--aqua-900)',

  /** CODE */
  codeFontColor: '#f8f8f2',
  codeFontFamily: 'var(--serif-font)',
  codeBackground: '#272822',
  codeTokenCData: '#708090',
  codeTokenPunctuation: '#f8f8f2',
  codeTokenConstant: '#f92672',
  codeTokenBoolean: '#ae81ff',
  codeTokenLanguage: '#f8f8f2',
  codeTokenAtRule: '#e6db74',
  codeTokenKeyword: '#66d9ef',
  codeTokenRegex: '#fd971f',

}

export const fontSizeNormal = {
  headingOne: '30px',
  headingTwo: '24px',
  headingThree: '22px',
  headingFour: '20px',
  headingFive: '18px',
  headingSix: '18px',
  paragraph: '1rem',
}
export const fontSizeMedium = {
  headingOne: '36px',
  headingTwo: '30px',
  headingThree: '24px',
  headingFour: '20px',
  headingFive: '20px',
  headingSix: '20px',
  paragraph: '18px',
}
export const fontSizeLarge = {
  headingOne: '40px',
  headingTwo: '36px',
  headingThree: '30px',
  headingFour: '24px',
  headingFive: '22px',
  headingSix: '22px',
  paragraph: '20px',
}
