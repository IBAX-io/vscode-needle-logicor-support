const functionDefs = {
    'align-content': {
        label: 'align-content',
        documentation: 'Specifies the alignment between the lines inside a flexible container when the items do not use all available space',
        insertText: 'align-content:',
        params: ['stretch ', ' center ', ' flex - start ', ' flex - end ', ' space - between ', ' space - around ', ' initial ', 'inherit']
    },
    'align-items': {
        label: 'align-items',
        documentation: 'Specifies the alignment for items inside a flexible container',
        insertText: 'align-items:',
        params: ['stretch ', ' center ', ' flex - start ', ' flex - end ', ' baseline ', ' initial ', 'inherit']
    },
    'align-self': {
        label: 'align-self',
        documentation: 'Specifies the alignment for selected items inside a flexible container',
        insertText: 'align-self:',
        params: ['auto ', ' stretch ', ' center ', ' flex - start ', ' flex - end ', ' baseline ', ' initial ', 'inherit']
    },
    'all': {
        label: 'all',
        documentation: 'Resets all properties(except unicode-bidi and direction)',
        insertText: 'all:',
        params: ['initial ', ' inherit ', 'unset']
    },
    'animation': {
        label: 'animation',
        documentation: 'name duration timing-function delay iteration-count direction fill-mode play-state',
        insertText: 'animation:',
        params: []
    },
    'animation-delay': {
        label: 'animation-delay',
        documentation: 'Specifies a delay for the start of an animation',
        insertText: 'animation-delay:',
        params: ['time', 'initial', 'inherit']
    },
    'animation-direction': {
        label: 'animation-direction',
        documentation: 'Specifies whether an animation should be played forwards, backwards or in alternate cycles',
        insertText: 'animation-direction:',
        params: ['normal', 'reverse', 'alternate', 'alternate-reverse', 'initial', 'inherit']
    },
    'animation-duration': {
        label: 'animation-duration',
        documentation: 'Specifies how long an animation should take to complete one cycle',
        insertText: 'animation-duration:',
        params: ['time', 'initial', 'inherit']
    },
    'animation-fill-mode': {
        label: 'animation-fill-mode',
        documentation: 'Specifies a style for the element when the animation is not playing(before it starts, after it ends, or both)',
        insertText: 'animation-fill-mode:',
        params: []
    },
    'animation-iteration-count': {
        label: 'animation-iteration-count',
        documentation: 'Specifies the number of times an animation should be played',
        insertText: 'animation-iteration-count:',
        params: []
    },
    'animation-name': {
        label: 'animation-name',
        documentation: 'Specifies a name for the @keyframes animation',
        insertText: 'animation-name:',
        params: []
    },
    'animation-play-state': {
        label: 'animation-play-state',
        documentation: 'Specifies whether the animation is running or paused',
        insertText: 'animation-play-state:',
        params: []
    },
    'animation-timing-function': {
        label: 'animation-timing-function',
        documentation: 'Specifies the speed curve of an animation',
        insertText: 'animation-timing-function:',
        params: []
    },

    'backface-visibility': {
        label: 'backface-visibility',
        documentation: 'Defines whether or not the back face of an element should be visible when facing the user',
        insertText: 'backface-visibility:',
        params: []
    },
    'background': {
        label: 'background',
        documentation: 'bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment |initial|inherit',
        insertText: 'background:',
        params: []
    },
    'background-attachment': {
        label: 'background-attachment',
        documentation: 'Sets whether a background image scrolls with the rest of the page, or is fixed',
        insertText: 'background-attachment:',
        params: ['scroll', 'fixed', 'local', 'initial', 'inherit']
    },
    'background-blend-mode': {
        label: 'background-blend-mode',
        documentation: 'Specifies the blending mode of each background layer(color/image)',
        insertText: 'background-blend-mode:',
        params: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'saturation', 'color', 'luminosity']
    },
    'background-clip': {
        label: 'background-clip',
        documentation: 'Defines how far the background(color or image) should extend within an element',
        insertText: 'background-clip:',
        params: ['border-box', 'padding-box', 'content-box', 'initial', 'inherit']
    },
    'background-color': {
        label: 'background-color',
        documentation: 'Specifies the background color of an element',
        insertText: 'background-color:',
        params: ['color', 'transparent', 'initial', 'inherit']
    },
    'background-image': {
        label: 'background-image',
        documentation: 'Specifies one or more background images for an element',
        insertText: 'background-image:',
        params: ['url', 'none', 'initial', 'inherit']
    },
    'background-origin': {
        label: 'background-origin',
        documentation: 'Specifies the origin position of a background image',
        insertText: 'background-origin:',
        params: ['padding-box', 'border-box', 'content-box', 'initial', 'inherit']
    },
    'background-position': {
        label: 'background-position',
        documentation: 'left top,left center,left bottom,right top,right center,right bottom,center top,center center,center bottom,x% y%,xpos ypos',
        insertText: 'background-position:',
        params: ['value']
    },
    'background-repeat': {
        label: 'background-repeat',
        documentation: 'Sets if/how a background image will be repeated',
        insertText: 'background-repeat:',
        params: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat', 'initial', 'inherit']
    },
    'background-size': {
        label: 'background-size',
        documentation: 'Specifies the size of the background images',
        insertText: 'background-size:',
        params: ['auto', 'length', 'cover', 'contain', 'initial', 'inherit']
    },
    'border': {
        label: 'border',
        documentation: 'border-width border-style border-color|initial|inherit',
        insertText: 'border:',
        params: []
    },
    'border-bottom': {
        label: 'border-bottom',
        documentation: 'border-width border-style border-color|initial|inherit',
        insertText: 'border-bottom:',
        params: []
    },
    'border-bottom-color': {
        label: 'border-bottom-color',
        documentation: 'color|transparent|initial|inherit',
        insertText: 'border-bottom-color:',
        params: ['transparent', 'initial', 'inherit']
    },
    'border-bottom-left-radius': {
        label: 'border-bottom-left-radius',
        documentation: 'Defines the radius of the border of the bottom-left corner',
        insertText: 'border-bottom-left-radius:',
        params: ['length%', 'length%', 'initial', 'inherit']
    },
    'border-bottom-right-radius': {
        label: 'border-bottom-right-radius',
        documentation: 'Defines the radius of the border of the bottom-right corner',
        insertText: 'border-bottom-right-radius:',
        params: ['length %', 'length %', 'initial', 'inherit']
    },
    'border-bottom-style': {
        label: 'border-bottom-style',
        documentation: 'Sets the style of the bottom border',
        insertText: 'border-bottom-style:',
        params: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit']
    },
    'border-bottom-width': {
        label: 'border-bottom-width',
        documentation: 'Sets the width of the bottom border',
        insertText: 'border-bottom-width:',
        params: ['medium', 'thin', 'thick', 'length', 'initial', 'inherit']
    },
    'border-collapse': {
        label: 'border-collapse',
        documentation: 'Sets whether table borders should collapse into a single border or be separated',
        insertText: 'border-collapse:',
        params: ['separate', 'collapse', 'initial', 'inherit']
    },
    'border-color': {
        label: 'border-color',
        documentation: 'color|transparent|initial|inherit',
        insertText: 'border-color:',
        params: ['transparent', 'initial', 'inherit']
    },
    'border-image': {
        label: 'border-image',
        documentation: 'source slice width outset repeat|initial|inherit',
        insertText: 'border-image:',
        params: []
    },
    'border-image-outset': {
        label: 'border-image-outset',
        documentation: 'Specifies the amount by which the border image area extends beyond the border box',
        insertText: 'border-image-outset:',
        params: ['length', 'number', 'initial', 'inherit']
    },
    'border-image-repeat': {
        label: 'border-image-repeat',
        documentation: 'Specifies whether the border image should be repeated, rounded or stretched',
        insertText: 'border-image-repeat:',
        params: ['stretch', 'repeat', 'round', 'initial', 'inherit']
    },
    'border-image-slice': {
        label: 'border-image-slice',
        documentation: 'Specifies how to slice the border image',
        insertText: 'border-image-slice:',
        params: ['number %', 'fill', 'initial', 'inherit']
    },
    'border-image-source': {
        label: 'border-image-source',
        documentation: 'Specifies the path to the image to be used as a border',
        insertText: 'border-image-source:',
        params: ['none', 'image', 'initial', 'inherit']
    },
    'border-image-width': {
        label: 'border-image-width',
        documentation: 'Specifies the width of the border image',
        insertText: 'border-image-width:',
        params: []
    },
    'border-left': {
        label: 'border-left',
        documentation: 'A shorthand property for setting all the left border properties in one declaration',
        insertText: 'border-left:',
        params: []
    },
    'border-left-color': {
        label: 'border-left-color',
        documentation: 'Sets the color of the left border',
        insertText: 'border-left-color:',
        params: []
    },
    'border-left-style': {
        label: 'border-left-style',
        documentation: 'Sets the style of the left border',
        insertText: 'border-left-style:',
        params: []
    },
    'border-left-width': {
        label: 'border-left-width',
        documentation: 'Sets the width of the left border',
        insertText: 'border-left-width:',
        params: []
    },
    'border-radius': {
        label: 'border-radius',
        documentation: 'A shorthand property for setting all the four border-*-radius properties',
        insertText: 'border-radius:',
        params: []
    },
    'border-right': {
        label: 'border-right',
        documentation: 'A shorthand property for setting all the right border properties in one declaration',
        insertText: 'border-right:',
        params: []
    },
    'border-right-color': {
        label: 'border-right-color',
        documentation: 'Sets the color of the right border',
        insertText: 'border-right-color:',
        params: []
    },
    'border-right-style': {
        label: 'border-right-style',
        documentation: 'Sets the style of the right border',
        insertText: 'border-right-style:',
        params: []
    },
    'border-right-width': {
        label: 'border-right-width',
        documentation: 'Sets the width of the right border',
        insertText: 'border-right-width:',
        params: []
    },
    'border-spacing': {
        label: 'border-spacing',
        documentation: 'Sets the distance between the borders of adjacent cells',
        insertText: 'border-spacing:',
        params: []
    },
    'border-style': {
        label: 'border-style',
        documentation: 'Sets the style of the four borders',
        insertText: 'border-style:',
        params: []
    },
    'border-top': {
        label: 'border-top',
        documentation: 'A shorthand property for setting all the top border properties in one declaration',
        insertText: 'border-top:',
        params: []
    },
    'border-top-color': {
        label: 'border-top-color',
        documentation: 'Sets the color of the top border',
        insertText: 'border-top-color:',
        params: []
    },
    'border-top-left-radius': {
        label: 'border-top-left-radius',
        documentation: 'Defines the radius of the border of the top-left corner',
        insertText: 'border-top-left-radius:',
        params: []
    },
    'border-top-right-radius': {
        label: 'border-top-right-radius',
        documentation: 'Defines the radius of the border of the top-right corner',
        insertText: 'border-top-right-radius:',
        params: []
    },
    'border-top-style': {
        label: 'border-top-style',
        documentation: 'Sets the style of the top border',
        insertText: 'border-top-style:',
        params: []
    },
    'border-top-width': {
        label: 'border-top-width',
        documentation: 'Sets the width of the top border',
        insertText: 'border-top-width:',
        params: []
    },
    'border-width': {
        label: 'border-width',
        documentation: 'Sets the width of the four borders',
        insertText: 'border-width:',
        params: []
    },
    'bottom': {
        label: 'bottom',
        documentation: 'Sets the elements position, from the bottom of its parent element',
        insertText: 'bottom:',
        params: []
    },
    'box-decoration-break': {
        label: 'box-decoration-break',
        documentation: 'Sets the behavior of the background and border of an element at page-break, or, for in-line elements, at line-break.',
        insertText: 'box-decoration-break:',
        params: []
    },
    'box-shadow': {
        label: 'box-shadow',
        documentation: 'Attaches one or more shadows to an element',
        insertText: 'box-shadow:',
        params: [' none', 'h-offset v-offset blur spread color ', 'inset', 'initial', 'inherit']
    },
    'box-sizing': {
        label: 'box-sizing',
        documentation: 'Defines how the width and height of an element are calculated: should they include padding and borders, or not',
        insertText: 'box-sizing:',
        params: ['content-box', 'border-box', 'initial', 'inherit']
    },
    'break-after': {
        label: 'break-after',
        documentation: 'Specifies the page-, column-, or region-break behavior after the generated box',
        insertText: 'break-after:',
        params: []
    },
    'break-before': {
        label: 'break-before',
        documentation: 'Specifies the page-, column-, or region-break behavior before the generated box',
        insertText: 'break-before:',
        params: []
    },
    'break-inside': {
        label: 'break-inside',
        documentation: 'Specifies the page-, column-, or region-break behavior inside the generated box',
        insertText: 'break-inside:',
        params: []
    },

    'caption-side': {
        label: 'caption-side',
        documentation: 'Specifies the placement of a table caption',
        insertText: 'caption-side:',
        params: []
    },
    'caret-color': {
        label: 'caret-color',
        documentation: 'Specifies the color of the cursor(caret) in inputs, textareas, or any element that is editable',
        insertText: 'caret-color:',
        params: []
    },

    'clear': {
        label: 'clear',
        documentation: 'Specifies on which sides of an element floating elements are not allowed to float',
        insertText: 'clear:',
        params: []
    },
    'clip': {
        label: 'clip',
        documentation: 'Clips an absolutely positioned element',
        insertText: 'clip:',
        params: []
    },
    'color': {
        label: 'color',
        documentation: 'Sets the color of text',
        insertText: 'color:',
        params: []
    },
    'column-count': {
        label: 'column-count',
        documentation: 'Specifies the number of columns an element should be divided into',
        insertText: 'column-count:',
        params: []
    },
    'column-fill': {
        label: 'column-fill',
        documentation: 'Specifies how to fill columns, balanced or not',
        insertText: 'column-fill:',
        params: []
    },
    'column-gap': {
        label: 'column-gap',
        documentation: 'Specifies the gap between the columns',
        insertText: 'column-gap:',
        params: []
    },
    'column-rule': {
        label: 'column-rule',
        documentation: 'A shorthand property for setting all the column-rule-* properties',
        insertText: 'column-rule:',
        params: []
    },
    'column-rule-color': {
        label: 'column-rule-color',
        documentation: 'Specifies the color of the rule between columns',
        insertText: 'column-rule-color:',
        params: []
    },
    'column-rule-style': {
        label: 'column-rule-style',
        documentation: 'Specifies the style of the rule between columns',
        insertText: 'column-rule-style:',
        params: []
    },
    'column-rule-width': {
        label: 'column-rule-width',
        documentation: 'Specifies the width of the rule between columns',
        insertText: 'column-rule-width:',
        params: []
    },
    'column-span': {
        label: 'column-span',
        documentation: 'Specifies how many columns an element should span across',
        insertText: 'column-span:',
        params: []
    },
    'column-width': {
        label: 'column-width',
        documentation: 'Specifies the column width',
        insertText: 'column-width:',
        params: []
    },
    'columns': {
        label: 'columns',
        documentation: 'A shorthand property for setting column-width and column-count',
        insertText: 'columns:',
        params: []
    },
    'content': {
        label: 'content',
        documentation: 'Used with the :before and :after pseudo-elements, to insert generated content',
        insertText: 'content:',
        params: ['normal', 'none', 'counter', 'attr', 'string', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'url', 'initial', 'inherit']
    },
    'counter-increment': {
        label: 'counter-increment',
        documentation: 'Increases or decreases the value of one or more CSS counters',
        insertText: 'counter-increment:',
        params: []
    },
    'counter-reset': {
        label: 'counter-reset',
        documentation: 'Creates or resets one or more CSS counters',
        insertText: 'counter-reset:',
        params: []
    },
    'cursor': {
        label: 'cursor',
        documentation: 'Specifies the mouse cursor to be displayed when pointing over an element',
        insertText: 'cursor:',
        params: ['alias', 'all-scroll', 'auto', 'cell', 'context-menu', 'col-resize', 'copy', 'crosshair', 'default', 'e-resize', 'ew-resize', 'grab', 'grabbing', 'help', 'move', 'n-resize', 'ne-resize', 'nesw-resize', 'ns-resize', 'nw-resize', 'nwse-resize', 'no-drop', 'none', 'not-allowed', 'pointer', 'progress', 'row-resize', 's-resize', 'se-resize', 'sw-resize', 'text', 'URL', 'vertical-text', 'w-resize', 'wait', 'zoom-in', 'zoom-out', 'initial', 'inherit']
    },

    'direction': {
        label: 'direction',
        documentation: 'Specifies the text direction/writing direction',
        insertText: 'direction:',
        params: ['ltr', 'rtl', 'initial', 'inherit']
    },
    'display': {
        label: 'display',
        documentation: 'Specifies how a certain HTML element should be displayed',
        insertText: 'display:',
        params: ['inline', 'block', 'flex', 'inline-block', 'inline-flex', 'inline-table', 'list-item', 'run-in', 'table', 'table-caption', 'table-column-group', 'table-header-group', 'table-footer-group', 'table-row-group', 'table-cell', 'table-column', 'table-row', 'none', 'initial', 'inherit']
    },

    'empty-cells': {
        label: 'empty-cells',
        documentation: 'Specifies whether or not to display borders and background on empty cells in a table',
        insertText: 'empty-cells:',
        params: []
    },

    'filter': {
        label: 'filter',
        documentation: 'Defines effects(e.g. blurring or color shifting) on an element before the element is displayed',
        insertText: 'filter:',
        params: ['none ', ' blur() ', ' brightness() ', ' contrast() ', ' drop-shadow() ', ' grayscale() ', ' hue-rotate() ', ' invert() ', ' opacity() ', ' saturate() ', ' sepia() ', 'url()']
    },
    'flex': {
        label: 'flex',
        documentation: 'Specifies the length of the item, relative to the rest',
        insertText: 'flex:',
        params: []
    },
    'flex-basis': {
        label: 'flex-basis',
        documentation: 'Specifies the initial length of a flexible item',
        insertText: 'flex-basis:',
        params: []
    },
    'flex-direction': {
        label: 'flex-direction',
        documentation: 'Specifies the direction of the flexible items',
        insertText: 'flex-direction:',
        params: []
    },
    'flex-flow': {
        label: 'flex-flow',
        documentation: 'A shorthand property for the flex-direction and the flex-wrap properties',
        insertText: 'flex-flow:',
        params: []
    },
    'flex-grow': {
        label: 'flex-grow',
        documentation: 'Specifies how much the item will grow relative to the rest',
        insertText: 'flex-grow:',
        params: []
    },
    'flex-shrink': {
        label: 'flex-shrink',
        documentation: 'Specifies how the item will shrink relative to the rest',
        insertText: 'flex-shrink:',
        params: []
    },
    'flex-wrap': {
        label: 'flex-wrap',
        documentation: 'Specifies whether the flexible items should wrap or not',
        insertText: 'flex-wrap:',
        params: []
    },
    'float': {
        label: 'float',
        documentation: 'Specifies whether or not a box should float',
        insertText: 'float:',
        params: []
    },
    'font': {
        label: 'font',
        documentation: 'Sets all the font properties in one declaration',
        insertText: 'font:',
        params: []
    },

    'font-family': {
        label: 'font-family',
        documentation: 'Specifies the font family for text',
        insertText: 'font-family:',
        params: []
    },
    'font-feature-settings': {
        label: 'font-feature-settings',
        documentation: 'Allows control over advanced typographic features in OpenType fonts',
        insertText: 'font-feature-settings:',
        params: []
    },

    'font-kerning': {
        label: 'font-kerning',
        documentation: 'Controls the usage of the kerning information(how letters are spaced)',
        insertText: 'font-kerning:',
        params: []
    },
    'font-language-override': {
        label: 'font-language-override',
        documentation: 'Controls the usage of language-specific glyphs in a typeface',
        insertText: 'font-language-override:',
        params: []
    },
    'font-size': {
        label: 'font-size',
        documentation: 'Specifies the font size of text',
        insertText: 'font-size:',
        params: ['medium', 'xx-small', 'x-small', 'small', 'large', 'x-large', 'xx-large', 'smaller', 'larger', 'length', 'initial', 'inherit']
    },
    'font-size-adjust': {
        label: 'font-size-adjust',
        documentation: 'Preserves the readability of text when font fallback occurs',
        insertText: 'font-size-adjust:',
        params: []
    },
    'font-stretch': {
        label: 'font-stretch',
        documentation: 'Selects a normal, condensed, or expanded face from a font family',
        insertText: 'font-stretch:',
        params: ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'initial', 'inherit']
    },
    'font-style': {
        label: 'font-style',
        documentation: 'Specifies the font style for text',
        insertText: 'font-style:',
        params: ['normal', 'italic', 'oblique', 'initial', 'inherit']
    },
    'font-synthesis': {
        label: 'font-synthesis',
        documentation: 'Controls which missing typefaces(bold or italic) may be synthesized by the browser',
        insertText: 'font-synthesis:',
        params: []
    },
    'font-variant': {
        label: 'font-variant',
        documentation: 'Specifies whether or not a text should be displayed in a small-caps font',
        insertText: 'font-variant:',
        params: []
    },
    'font-variant-alternates': {
        label: 'font-variant-alternates',
        documentation: 'Controls the usage of alternate glyphs associated to alternative names defined in @font-feature-values',
        insertText: 'font-variant-alternates:',
        params: []
    },
    'font-variant-caps': {
        label: 'font-variant-caps',
        documentation: 'Controls the usage of alternate glyphs for capital letters',
        insertText: 'font-variant-caps:',
        params: []
    },
    'font-variant-east-asian': {
        label: 'font-variant-east-asian',
        documentation: 'Controls the usage of alternate glyphs for East Asian scripts(e.g Japanese and Chinese)',
        insertText: 'font-variant-east-asian:',
        params: []
    },
    'font-variant-ligatures': {
        label: 'font-variant-ligatures',
        documentation: 'Controls which ligatures and contextual forms are used in textual content of the elements it applies to',
        insertText: 'font-variant-ligatures:',
        params: []
    },
    'font-variant-numeric': {
        label: 'font-variant-numeric',
        documentation: 'Controls the usage of alternate glyphs for numbers, fractions, and ordinal markers',
        insertText: 'font-variant-numeric:',
        params: []
    },
    'font-variant-position': {
        label: 'font-variant-position',
        documentation: 'Controls the usage of alternate glyphs of smaller size positioned as superscript or subscript regarding the baseline of the font',
        insertText: 'font-variant-position:',
        params: []
    },
    'font-weight': {
        label: 'font-weight',
        documentation: 'Specifies the weight of a font',
        insertText: 'font-weight:',
        params: ['normal', 'bold', 'bolder', 'lighter', 'number', 'initial', 'inherit']
    },

    'grid': {
        label: 'grid',
        documentation: 'A shorthand property',
        insertText: 'grid:',
        params: []
    },
    'grid-area': {
        label: 'grid-area',
        documentation: 'Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties',
        insertText: 'grid-area:',
        params: []
    },
    'grid-auto-columns': {
        label: 'grid-auto-columns',
        documentation: 'Specifies a default column size',
        insertText: 'grid-auto-columns:',
        params: []
    },
    'grid-auto-flow': {
        label: 'grid-auto-flow',
        documentation: 'Specifies how auto-placed items are inserted in the grid',
        insertText: 'grid-auto-flow:',
        params: []
    },
    'grid-auto-rows': {
        label: 'grid-auto-rows',
        documentation: 'Specifies a default row size',
        insertText: 'grid-auto-rows:',
        params: []
    },
    'grid-column': {
        label: 'grid-column',
        documentation: 'A shorthand property for the grid-column-start and the grid-column-end properties',
        insertText: 'grid-column:',
        params: []
    },
    'grid-column-end': {
        label: 'grid-column-end',
        documentation: 'Specifies where to end the grid item',
        insertText: 'grid-column-end:',
        params: []
    },
    'grid-column-gap': {
        label: 'grid-column-gap',
        documentation: 'Specifies the size of the gap between columns',
        insertText: 'grid-column-gap:',
        params: []
    },
    'grid-column-start': {
        label: 'grid-column-start',
        documentation: 'Specifies where to start the grid item',
        insertText: 'grid-column-start:',
        params: []
    },
    'grid-gap': {
        label: 'grid-gap',
        documentation: 'A shorthand property for the grid-row-gap and grid-column-gap properties',
        insertText: 'grid-gap:',
        params: []
    },
    'grid-row': {
        label: 'grid-row',
        documentation: 'A shorthand property for the grid-row-start and the grid-row-end properties',
        insertText: 'grid-row:',
        params: []
    },
    'grid-row-end': {
        label: 'grid-row-end',
        documentation: 'Specifies where to end the grid item',
        insertText: 'grid-row-end:',
        params: []
    },
    'grid-row-gap': {
        label: 'grid-row-gap',
        documentation: 'Specifies the size of the gap between rows',
        insertText: 'grid-row-gap:',
        params: []
    },
    'grid-row-start': {
        label: 'grid-row-start',
        documentation: 'Specifies where to start the grid item',
        insertText: 'grid-row-start:',
        params: []
    },
    'grid-template': {
        label: 'grid-template',
        documentation: 'A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties',
        insertText: 'grid-template:',
        params: []
    },
    'grid-template-areas': {
        label: 'grid-template-areas',
        documentation: 'Specifies how to display columns and rows, using named grid items',
        insertText: 'grid-template-areas:',
        params: []
    },
    'grid-template-columns': {
        label: 'grid-template-columns',
        documentation: 'Specifies the size of the columns, and how many columns in a grid layout',
        insertText: 'grid-template-columns:',
        params: []
    },
    'grid-template-rows': {
        label: 'grid-template-rows',
        documentation: 'Specifies the size of the rows in a grid layout',
        insertText: 'grid-template-rows:',
        params: []
    },

    'hanging-punctuation': {
        label: 'hanging-punctuation',
        documentation: 'Specifies whether a punctuation character may be placed outside the line box',
        insertText: 'hanging-punctuation:',
        params: []
    },
    'height': {
        label: 'height',
        documentation: 'Sets the height of an element',
        insertText: 'height:',
        params: []
    },
    'hyphens': {
        label: 'hyphens',
        documentation: 'Sets how to split words to improve the layout of paragraphs',
        insertText: 'hyphens:',
        params: []
    },

    'image-orientation': {
        label: 'image-orientation',
        documentation: 'Specifies a rotation in the right or clockwise direction that a user agent applies to an image(This property is likely going to be deprecated and its functionality moved to HTML)',
        insertText: 'image-orientation:',
        params: []
    },
    'image-rendering': {
        label: 'image-rendering',
        documentation: 'Gives a hint to the browser about what aspects of an image are most important to preserve when the image is scaled',
        insertText: 'image-rendering:',
        params: []
    },
    'image-resolution': {
        label: 'image-resolution',
        documentation: 'Specifies the intrinsic resolution of all raster images used in/on the element',
        insertText: 'image-resolution:',
        params: []
    },

    'justify-content': {
        label: 'justify-content',
        documentation: 'Specifies the alignment between the items inside a flexible container when the items do not use all available space',
        insertText: 'justify-content:',
        params: []
    },



    'left': {
        label: 'left',
        documentation: 'Specifies the left position of a positioned element',
        insertText: 'left:',
        params: []
    },
    'letter-spacing': {
        label: 'letter-spacing',
        documentation: 'Increases or decreases the space between characters in a text',
        insertText: 'letter-spacing:',
        params: []
    },
    'line-break': {
        label: 'line-break',
        documentation: 'Specifies how/if to break lines',
        insertText: 'line-break:',
        params: []
    },
    'line-height': {
        label: 'line-height',
        documentation: 'Sets the line height',
        insertText: 'line-height:',
        params: []
    },
    'list-style': {
        label: 'list-style',
        documentation: 'Sets all the properties for a list in one declaration',
        insertText: 'list-style:',
        params: []
    },
    'list-style-image': {
        label: 'list-style-image',
        documentation: 'Specifies an image as the list-item marker',
        insertText: 'list-style-image:',
        params: []
    },
    'list-style-position': {
        label: 'list-style-position',
        documentation: 'Specifies if the list-item markers should appear inside or outside the content flow',
        insertText: 'list-style-position:',
        params: []
    },
    'list-style-type': {
        label: 'list-style-type',
        documentation: 'Specifies the type of list-item marker',
        insertText: 'list-style-type:',
        params: []
    },

    'margin': {
        label: 'margin',
        documentation: 'Sets all the margin properties in one declaration',
        insertText: 'margin:',
        params: []
    },
    'margin-bottom': {
        label: 'margin-bottom',
        documentation: 'Sets the bottom margin of an element',
        insertText: 'margin-bottom:',
        params: []
    },
    'margin-left': {
        label: 'margin-left',
        documentation: 'Sets the left margin of an element',
        insertText: 'margin-left:',
        params: []
    },
    'margin-right': {
        label: 'margin-right',
        documentation: 'Sets the right margin of an element',
        insertText: 'margin-right:',
        params: []
    },
    'margin-top': {
        label: 'margin-top',
        documentation: 'Sets the top margin of an element',
        insertText: 'margin-top:',
        params: []
    },
    'max-height': {
        label: 'max-height',
        documentation: 'Sets the maximum height of an element',
        insertText: 'max-height:',
        params: []
    },
    'max-width': {
        label: 'max-width',
        documentation: 'Sets the maximum width of an element',
        insertText: 'max-width:',
        params: []
    },

    'min-height': {
        label: 'min-height',
        documentation: 'Sets the minimum height of an element',
        insertText: 'min-height:',
        params: []
    },
    'min-width': {
        label: 'min-width',
        documentation: 'Sets the minimum width of an element',
        insertText: 'min-width:',
        params: []
    },

    'object-fit': {
        label: 'object-fit',
        documentation: 'Specifies how the contents of a replaced element should be fitted to the box established by its used height and width',
        insertText: 'object-fit:',
        params: []
    },
    'object-position': {
        label: 'object-position',
        documentation: 'Specifies the alignment of the replaced element inside its box',
        insertText: 'object-position:',
        params: []
    },
    'opacity': {
        label: 'opacity',
        documentation: 'Sets the opacity level for an element',
        insertText: 'opacity:',
        params: []
    },
    'order': {
        label: 'order',
        documentation: 'Sets the order of the flexible item, relative to the rest',
        insertText: 'order:',
        params: []
    },
    'orphans': {
        label: 'orphans',
        documentation: 'Sets the minimum number of lines that must be left at the bottom of a page when a page break occurs inside an element',
        insertText: 'orphans:',
        params: []
    },
    'outline': {
        label: 'outline',
        documentation: 'Sets all the outline properties in one declaration',
        insertText: 'outline:',
        params: []
    },
    'outline-color': {
        label: 'outline-color',
        documentation: 'Sets the color of an outline',
        insertText: 'outline-color:',
        params: []
    },
    'outline-offset': {
        label: 'outline-offset',
        documentation: 'Offsets an outline, and draws it beyond the border edge',
        insertText: 'outline-offset:',
        params: []
    },
    'outline-style': {
        label: 'outline-style',
        documentation: 'Sets the style of an outline',
        insertText: 'outline-style:',
        params: []
    },
    'outline-width': {
        label: 'outline-width',
        documentation: 'Sets the width of an outline',
        insertText: 'outline-width:',
        params: []
    },

    'overflow-wrap': {
        label: 'overflow-wrap',
        documentation: 'Specifies whether or not the browser may break lines within words in order to prevent overflow(when a string is too long to fit its containing box)',
        insertText: 'overflow-wrap:',
        params: []
    },
    'overflow-x': {
        label: 'overflow-x',
        documentation: 'Specifies whether or not to clip the left/right edges of the content, if it overflows the element\'s content area',
        insertText: 'overflow-x:',
        params: []
    },
    'overflow-y': {
        label: 'overflow-y',
        documentation: 'Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element\'s content area',
        insertText: 'overflow-y:',
        params: []
    },

    'padding': {
        label: 'padding',
        documentation: 'Sets all the padding properties in one declaration',
        insertText: 'padding:',
        params: []
    },
    'padding-bottom': {
        label: 'padding-bottom',
        documentation: 'Sets the bottom padding of an element',
        insertText: 'padding-bottom:',
        params: []
    },
    'padding-left': {
        label: 'padding-left',
        documentation: 'Sets the left padding of an element',
        insertText: 'padding-left:',
        params: []
    },
    'padding-right': {
        label: 'padding-right',
        documentation: 'Sets the right padding of an element',
        insertText: 'padding-right:',
        params: []
    },
    'padding-top': {
        label: 'padding-top',
        documentation: 'Sets the top padding of an element',
        insertText: 'padding-top:',
        params: []
    },
    'page-break-after': {
        label: 'page-break-after',
        documentation: 'Sets the page-breaking behavior after an element',
        insertText: 'page-break-after:',
        params: []
    },
    'page-break-before': {
        label: 'page-break-before',
        documentation: 'Sets the page-breaking behavior before an element',
        insertText: 'page-break-before:',
        params: []
    },
    'page-break-inside': {
        label: 'page-break-inside',
        documentation: 'Sets the page-breaking behavior inside an element',
        insertText: 'page-break-inside:',
        params: []
    },
    'perspective': {
        label: 'perspective',
        documentation: 'Specifies the perspective on how 3D elements are viewed',
        insertText: 'perspective:',
        params: []
    },
    'perspective-origin': {
        label: 'perspective-origin',
        documentation: 'Specifies the bottom position of 3D elements',
        insertText: 'perspective-origin:',
        params: []
    },
    'position': {
        label: 'position',
        documentation: 'Specifies the type of positioning method used for an element(static, relative, absolute or fixed)',
        insertText: 'position:',
        params: []
    },

    'quotes': {
        label: 'quotes',
        documentation: 'Sets the type of quotation marks for embedded quotations',
        insertText: 'quotes:',
        params: []
    },

    'resize': {
        label: 'resize',
        documentation: 'Specifies whether or not an element is resizable by the user',
        insertText: 'resize:',
        params: []
    },
    'right': {
        label: 'right',
        documentation: 'Specifies the right position of a positioned element',
        insertText: 'right:',
        params: []
    },

    'tab-size': {
        label: 'tab-size',
        documentation: 'Specifies the length of the tab-character',
        insertText: 'tab-size:',
        params: []
    },
    'table-layout': {
        label: 'table-layout',
        documentation: 'Sets the layout algorithm to be used for a table',
        insertText: 'table-layout:',
        params: []
    },
    'text-align': {
        label: 'text-align',
        documentation: 'Specifies the horizontal alignment of text',
        insertText: 'text-align:',
        params: ['left', 'right', 'center', 'justify', 'initial', 'inherit']
    },

    'text-combine-upright': {
        label: 'text-combine-upright',
        documentation: 'Specifies the combination of multiple characters into the space of a single character',
        insertText: 'text-combine-upright:',
        params: []
    },
    'text-decoration': {
        label: 'text-decoration',
        documentation: 'Specifies the decoration added to text',
        insertText: 'text-decoration:',
        params: ['none', 'underline', 'overline', 'line-through', 'initial', 'inherit']
    },
    'text-decoration-color': {
        label: 'text-decoration-color',
        documentation: 'Specifies the color of the text-decoration',
        insertText: 'text-decoration-color:',
        params: []
    },
    'text-decoration-line': {
        label: 'text-decoration-line',
        documentation: 'Specifies the type of line in a text-decoration',
        insertText: 'text-decoration-line:',
        params: ['none', 'underline', 'overline', 'line-through', 'initial', 'inherit']
    },
    'text-decoration-style': {
        label: 'text-decoration-style',
        documentation: 'Specifies the style of the line in a text decoration',
        insertText: 'text-decoration-style:',
        params: []
    },
    'text-indent': {
        label: 'text-indent',
        documentation: 'Specifies the indentation of the first line in a text-block',
        insertText: 'text-indent:',
        params: []
    },
    'text-orientation': {
        label: 'text-orientation',
        documentation: 'Defines the orientation of the text in a line',
        insertText: 'text-orientation:',
        params: []
    },
    'text-overflow': {
        label: 'text-overflow',
        documentation: 'Specifies what should happen when text overflows the containing element',
        insertText: 'text-overflow:',
        params: ['clip', 'ellipsis', 'string', 'initial', 'inherit']
    },
    'text-shadow': {
        label: 'text-shadow',
        documentation: 'h-shadow v-shadow blur-radius|color|none|initial|inherit',
        insertText: 'text-shadow:',
        params: []
    },
    'text-transform': {
        label: 'text-transform',
        documentation: 'Controls the capitalization of text',
        insertText: 'text-transform:',
        params: ['none', 'capitalize', 'uppercase', 'lowercase', 'initial', 'inherit']
    },
    'text-underline-position': {
        label: 'text-underline-position',
        documentation: 'Specifies the position of the underline which is set using the text-decoration property',
        insertText: 'text-underline-position:',
        params: []
    },
    'top': {
        label: 'top',
        documentation: 'Specifies the top position of a positioned element',
        insertText: 'top:',
        params: []
    },
    'transform': {
        label: 'transform',
        documentation: 'none |transform-functions|initial|inherit',
        insertText: 'transform:',
        params: ['none', 'matrix(n,n,n,n,n,n)', 'matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)', 'translate(x,y)', 'translate3d(x,y,z)', 'translateX(x)', 'translateY(y)', 'translateZ(z)', 'scale(x,y)', 'scale3d(x,y,z)', 'scaleX(x)', 'scaleY(y)', 'scaleZ(z)', 'rotate(angle)', 'rotate3d(x,y,z,angle)', 'rotateX(angle)', 'rotateY(angle)', 'rotateZ(angle)', 'skew(x-angle,y-angle)', 'skewX(angle)', 'skewY(angle)', 'perspective(n)', 'initial', 'inherit']
    },
    'transform-origin': {
        label: 'transform-origin',
        documentation: 'Allows you to change the position on transformed elements',
        insertText: 'transform-origin:',
        params: []
    },
    'transform-style': {
        label: 'transform-style',
        documentation: 'Specifies how nested elements are rendered in 3D space',
        insertText: 'transform-style:',
        params: []
    },
    'transition': {
        label: 'transition',
        documentation: 'property duration timing-function |delay |initial|inherit',
        insertText: 'transition:',
        params: []
    },
    'transition-delay': {
        label: 'transition-delay',
        documentation: 'Specifies when the transition effect will start',
        insertText: 'transition-delay:',
        params: []
    },
    'transition-duration': {
        label: 'transition-duration',
        documentation: 'Specifies how many seconds or milliseconds a transition effect takes to complete',
        insertText: 'transition-duration:',
        params: []
    },
    'transition-property': {
        label: 'transition-property',
        documentation: 'Specifies the name of the CSS property the transition effect is for',
        insertText: 'transition-property:',
        params: []
    },
    'transition-timing-function': {
        label: 'transition-timing-function',
        documentation: 'Specifies the speed curve of the transition effect',
        insertText: 'transition-timing-function:',
        params: []
    },

    'unicode-bidi': {
        label: 'unicode-bidi',
        documentation: 'Used together with the direction property to set or return whether the text should be overridden to support multiple languages in the same document',
        insertText: 'unicode-bidi:',
        params: ['normal', 'embed', 'bidi-override', 'initial', 'inherit']
    },
    'user-select': {
        label: 'user-select',
        documentation: 'Specifies whether the text of an element can be selected',
        insertText: 'user-select:',
        params: ['auto', 'none', 'text', 'all']
    },

    'vertical-align': {
        label: 'vertical-align',
        documentation: 'Sets the vertical alignment of an element',
        insertText: 'vertical-align:',
        params: ['baseline', 'length', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom', 'text-bottom', 'initial', 'inherit']
    },
    'visibility': {
        label: 'visibility',
        documentation: 'Specifies whether or not an element is visible',
        insertText: 'visibility:',
        params: ['visible', 'hidden', 'collapse', 'initial', 'inherit']
    },

    'white-space': {
        label: 'white-space',
        documentation: 'Specifies how white-space inside an element is handled',
        insertText: 'white-space:',
        params: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'initial', 'inherit']
    },
    'widows': {
        label: 'widows',
        documentation: 'Sets the minimum number of lines that must be left at the top of a page when a page break occurs inside an element',
        insertText: 'widows:',
        params: []
    },
    'width': {
        label: 'width',
        documentation: 'Sets the width of an element',
        insertText: 'width:',
        params: []
    },
    'word-break': {
        label: 'word-break',
        documentation: 'Specifies line breaking rules for non-CJK scripts',
        insertText: 'word-break:',
        params: ['normal', 'break-all', 'keep-all', 'initial', 'inherit']
    },
    'word-spacing': {
        label: 'word-spacing',
        documentation: 'Increases or decreases the space between words in a text',
        insertText: 'word-spacing:',
        params: ['normal', 'length', 'initial', 'inherit']
    },
    'word-wrap': {
        label: 'word-wrap',
        documentation: 'Allows long, unbreakable words to be broken and wrap to the next line',
        insertText: 'word-wrap:',
        params: ['normal', 'break-word', 'initial', 'inherit']
    },

    'z-index': {
        label: 'z-index',
        documentation: 'Sets the stack order of a positioned element',
        insertText: 'z-index:',
        params: ['auto', 'number', 'initial', 'inherit']
    },
}

exports.completions = functionDefs