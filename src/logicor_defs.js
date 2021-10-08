const staticParamTypes = {
    Body: {
        label: 'Body',
        documentation: 'Contents of this element',
        insertText: 'Body: '
    },
    Class: {
        label: 'Class',
        documentation: 'HTML class value',
        insertText: 'Class: '
    }
}

const functionDefs = {
    Address: {
        label: 'Address',
        documentation: 'Address(Wallet)',
        insertText: 'Address',
        params: [{
            label: 'Wallet',
            documentation: 'Wallet ID to convert',
            insertText: 'Wallet: '
        }]
    },
    AddToolButton: {
        label: 'AddToolButton(Title, Icon, Page, PageParams)',
        documentation: '.Popup(width, title)',
        insertText: 'AddToolButton',
        params: [{
            label: 'Title',
            documentation: 'Button title to show',
            insertText: 'Title:'
        },
        {
            label: 'Icon',
            documentation: '',
            insertText: 'Icon: '
        },
        {
            label: 'Page',
            documentation: '',
            insertText: 'Page: '
        },
        {
            label: 'PageParams',
            documentation: '',
            insertText: 'Params: '
        }
        ]
    },
    And: {
        label: 'And',
        documentation: 'And(parameters)',
        insertText: 'And('
    },
    JsonToSource: {
        label: 'JsonToSource',
        documentation: 'JsonToSource(Source, Data)',
        insertText: 'JsonToSource('
    },
    ArrayToSource: {
        label: 'ArrayToSource',
        documentation: 'ArrayToSource(Source, Data)',
        insertText: 'ArrayToSource('
    },
    Range: {
        label: 'Range',
        documentation: 'Range(Source,From,To,Step)',
        insertText: 'Range('
    },
    DBFind: {
        label: 'DBFind(Name, Source)',
        documentation: '.Columns(columns)\n.Where(where map)\n.WhereId(id)\n.Order(name)\n.Limit(limit)\n.Offset(offset)\n.Ecosystem(id)\n.Custom(Column,Body)\n.Vars(prefix)\n.Count(count_name)',
        insertText: 'DBFind',
        params: [{
            label: 'Name',
            documentation: 'Table name to search',
            insertText: 'Name: '
        },
        {
            label: 'Source',
            documentation: 'Source identificator to bind results',
            insertText: 'Source: '
        }
        ]
    },
    GetColumnType: {
        label: 'GetColumnType(Table, Column)',
        documentation: '',
        insertText: 'GetColumnType(',
    },
    Button: {
        label: 'Button(Body, Page, Class, Contract, Params, PageParams)',
        documentation: '.Popup(width, title).Alert(Text,ConfirmButton,CancelButton,Icon)\n.Style(style)',
        insertText: 'Button',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class,
            {
                label: 'Page',
                documentation: 'Page to redirect after successful action',
                insertText: 'Page: '
            },
            {
                label: 'Contract',
                documentation: 'Contract name to execute (case-sensitive)',
                insertText: 'Contract: '
            },
            {
                label: 'Params',
                documentation: 'Contract execution parameters (case-sensitive)',
                insertText: 'Params: '
            },
            {
                label: 'PageParams',
                documentation: 'Parameters which will be passed to the page upon successful redirection',
                insertText: 'PageParams: '
            }
        ]
    },
    CompositeContract: {
        label: '.CompositeContract(Contract, Data)',
        documentation: '',
        insertText: 'CompositeContract(',
        params: [
            {
                label: 'Contract',
                documentation: '',
                insertText: 'Contract: '
            },
            {
                label: 'Data',
                documentation: '',
                insertText: 'Data: '
            }
        ]
    },
    
    Data: {
        label: 'Data(Source,Columns,Data)',
        documentation: '.Custom(Column,Body)',
        insertText: 'Data',
        params: [{
            label: 'Source',
            documentation: 'Source identificator to bind results',
            insertText: 'Source: '
        },
        {
            label: 'Columns',
            documentation: 'List of columns separated with comma',
            insertText: 'Columns: '
        },
        {
            label: 'Data',
            documentation: 'Emitted data separated with comma line by line for each row',
            insertText: 'Data: '
        }
        ]
    },
    CmpTime: {
        label: 'CmpTime(Time1, Time2)',
        documentation: '',
        insertText: 'CmpTime',
        params: [{
            label: 'Time1',
            documentation: '',
            insertText: 'Time1: '
        },
        {
            label: 'Time2',
            documentation: '',
            insertText: 'Time2: '
        },
        ]
    },
    Div: {
        label: 'Div(Class, Body) ',
        documentation: '.Style(style)',
        insertText: 'Div',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    Calculate: {
        label: 'Calculate(Exp, Type, Prec) ',
        documentation: '',
        insertText: 'Calculate(',
        params: [{
            label: 'Type',
            documentation: 'int, float, money',
            insertText: 'Name: '
        }, {
            label: 'Exp',
            documentation: '',
            insertText: 'Exp: '
        }, {
            label: 'Prec',
            documentation: 'count of number after dot in "float" and "money"',
            insertText: 'Prec: '
        }]
    },
    Em: {
        label: 'Em',
        documentation: 'Em(Body, Class)',
        insertText: 'Em',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    ForList: {
        label: 'ForList(Source, Body)',
        documentation: '',
        insertText: 'ForList',
        params: [{
            label: 'Source',
            documentation: 'Source identificator to fetch the results',
            insertText: 'Source: '
        },
        staticParamTypes.Body
        ]
    },
    Form: {
        label: 'Form(Class, Body)',
        documentation: '.Style(style)',
        insertText: 'Form',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    GetVar: {
        label: 'GetVar(Name)',
        documentation: '',
        insertText: 'GetVar',
        params: [{
            label: 'Name',
            documentation: 'Variable name to get the value of',
            insertText: 'Name: '
        }]
    },
    If: {
        label: 'If(Condition){ Body }',
        documentation: '.Else{ Body }',
        insertText: 'If',
        params: [
            staticParamTypes.Body,
            {
                label: 'Condition',
                documentation: 'Condition to met for this function to succeed',
                insertText: 'Condition: '
            }
        ]
    },
    Image: {
        label: 'Image(Src,Alt,Class)',
        documentation: '.Style(style)',
        insertText: 'Image',
        params: [{
            label: 'Src',
            documentation: 'Image URI',
            insertText: 'Src: '
        },
        {
            label: 'Alt',
            documentation: 'Alternative text that is displayed when image is unable to load',
            insertText: 'Alt: '
        },
        staticParamTypes.Class
        ]
    },
    ImageInput: {
        label: 'ImageInput(Name, Width, Ratio, Format)',
        documentation: '',
        insertText: 'ImageInput',
        params: [{
            label: 'Name',
            documentation: 'Unique input name to bind the value to',
            insertText: 'Name: '
        },
        {
            label: 'Width',
            documentation: 'Minimum width of the resulting image',
            insertText: 'Width: '
        },
        {
            label: 'Ratio',
            documentation: 'Aspect ratio of the resulting image (WIDTH / HEIGHT)',
            insertText: 'Ratio: '
        },
        {
            label: 'Format',
            documentation: 'What format to use when generating the result',
            insertText: 'Format: '
        },
        staticParamTypes.Class
        ]
    },
    Include: {
        label: 'Include(Name)',
        documentation: '',
        insertText: 'Include',
        params: [{
            label: 'Name',
            documentation: 'Page or block name to include',
            insertText: 'Name: '
        }]
    },
    Input: {
        label: 'Input(Name,Class,Placeholder,Type,Value)',
        documentation: '.Validate(validation)\n.Style(style)',
        insertText: 'Input',
        params: [
            staticParamTypes.Class,
            {
                label: 'Name',
                documentation: 'Unique input name to bind the value to',
                insertText: 'Name: '
            },
            {
                label: 'Placeholder',
                documentation: 'Placeholder text to show when input is empty',
                insertText: 'Placeholder: '
            },
            {
                label: 'Type',
                documentation: 'Input type such as text or password',
                insertText: 'Type: '
            },
            {
                label: 'Value',
                documentation: 'Default input value',
                insertText: 'Value: '
            },
            {
                label: 'Disabled',
                documentation: 'Sets input state to read-only. Any non-empty value will be treated as true',
                insertText: 'Disabled: '
            }
        ]
    },
    InputErr: {
        label: 'InputErr(Name,validation errors)',
        documentation: '',
        insertText: 'InputErr',
        params: [
            staticParamTypes.Class,
            {
                label: 'Name',
                documentation: 'Unique input name to validate',
                insertText: 'Name: '
            }
        ]
    },
    Label: {
        label: 'Label(Body, Class, For)',
        documentation: '.Style(style)',
        insertText: 'Label',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class,
            {
                label: 'For',
                documentation: 'Unique input name to bind the label',
                insertText: 'For: '
            }
        ]
    },
    LangRes: {
        documentation: '',
        label: 'LangRes(Name, Lang)',
        insertText: 'LangRes',
        params: [{
            label: 'Name',
            documentation: 'Unique resource name to get',
            insertText: 'Name: '
        },
        {
            label: 'Lang',
            documentation: 'Explicitly set language of the resource to get',
            insertText: 'Lang: '
        }
        ]
    },
    LinkPage: {
        label: 'LinkPage(Body, Page, Class, PageParams)',
        documentation: '.Style(style)',
        insertText: 'LinkPage',
        params: [
            staticParamTypes.Body,
            {
                label: 'Page',
                documentation: '',
                insertText: 'Page: '
            },
            staticParamTypes.Class,
            {
                label: 'PageParams',
                documentation: '',
                insertText: 'Params: '
            }
        ]
    },
    MenuGroup: {
        label: 'MenuGroup(Title, Body, Icon)',
        documentation: '',
        insertText: 'MenuGroup',
        params: [
            staticParamTypes.Body,
            {
                label: 'Title',
                documentation: '',
                insertText: 'Title: '
            },
            {
                label: 'Icon',
                documentation: '',
                insertText: 'Icon: '
            }
        ]
    },
    MenuItem: {
        label: 'MenuItem(Title, Page, Params, Icon, Vde)',
        documentation: '',
        insertText: 'MenuItem',
        params: [{
            label: 'Title',
            documentation: '',
            insertText: 'Title: '
        },
        {
            label: 'Page',
            documentation: '',
            insertText: 'Page: '
        },
        {
            label: 'Params',
            documentation: '',
            insertText: 'Params: '
        },
        {
            label: 'Icon',
            documentation: '',
            insertText: 'Icon: '
        }
        ]
    },
    Or: {
        label: 'Or(parameters)',
        documentation: '',
        insertText: 'Or('
    },
    P: {
        label: 'P(Body, Class)',
        documentation: '.Style(style)',
        insertText: 'P',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    RadioGroup: {
        label: 'RadioGroup(Name, Source, NameColumn, ValueColumn, Value, Class)',
        documentation: '.Validate(validation)\n.Style(style)',
        insertText: 'RadioGroup',
        params: [{
            label: 'Name',
            documentation: 'Unique input name to bind the value to',
            insertText: 'Name: '
        },
        {
            label: 'Source',
            documentation: 'Source identificator to fetch the results',
            insertText: 'Source: '
        },
        {
            label: 'NameColumn',
            documentation: 'Name of the column that will be shown near the button',
            insertText: 'NameColumn: '
        },
        {
            label: 'ValueColumn',
            documentation: 'Value that will be passed to the form',
            insertText: 'ValueColumn: '
        },
        {
            label: 'Value',
            documentation: 'Default value that will be selected',
            insertText: 'Value: '
        },
        staticParamTypes.Class
        ]
    },
    Select: {
        label: 'Select(Name, Source, NameColumn, ValueColumn, Value, Class)',
        documentation: '.Validate(validation)\n.Style(style)',
        insertText: 'Select',
        params: [{
            label: 'Name',
            documentation: 'Unique input name to bind the value to',
            insertText: 'Name: '
        },
        {
            label: 'Source',
            documentation: 'Source identificator to fetch the results',
            insertText: 'Source: '
        },
        {
            label: 'NameColumn',
            documentation: 'Name of the column that will be shown in the dropdown menu',
            insertText: 'NameColumn: '
        },
        {
            label: 'ValueColumn',
            documentation: 'Value that will be passed to the form',
            insertText: 'ValueColumn: '
        },
        {
            label: 'Value',
            documentation: 'Default value that will be selected',
            insertText: 'Value: '
        },
        staticParamTypes.Class
        ]
    },
    SetVar: {
        label: 'SetVar(Name, Value)',
        documentation: '',
        insertText: 'SetVar',
        params: [{
            label: 'Name',
            documentation: '',
            insertText: 'Name: '
        },
        {
            label: 'Value',
            documentation: '',
            insertText: 'Value: '
        }
        ]
    },
    SetTitle: {
        label: 'SetTitle(Title)',
        documentation: '',
        insertText: 'SetTitle',
        params: [{
            label: 'Title',
            documentation: '',
            insertText: 'Title: '
        }]
    },
    Span: {
        label: 'Span(Body, Class)',
        documentation: '.Style(style)',
        insertText: 'Span',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    Strong: {
        label: 'Strong(Body, Class)',
        documentation: '',
        insertText: 'Strong',
        params: [
            staticParamTypes.Body,
            staticParamTypes.Class
        ]
    },
    Table: {
        label: 'Table(Source, Columns)',
        documentation: '.Style(style)',
        insertText: 'Table',
        params: [{
            label: 'Source',
            documentation: '',
            insertText: 'Source: '
        },
        {
            label: 'Columns',
            documentation: '',
            insertText: 'Columns: '
        }
        ]
    },
    EcosysParam: {
        label: 'EcosysParam(Name, Index, Source)',
        documentation: '',
        insertText: 'EcosysParam',
        params: [{
            label: 'Source',
            documentation: '',
            insertText: 'Source: '
        },
        {
            label: 'Index',
            documentation: '',
            insertText: 'Index: '
        },
        {
            label: 'Name',
            documentation: '',
            insertText: 'Name: '
        }
        ]
    },
    SysParam: {
        label: 'SysParam(Name)',
        documentation: '',
        insertText: 'SysParam',
        params: [{
            label: 'Name',
            documentation: '',
            insertText: 'Name: '
        }
        ]
    },
    DateTime: {
        label: 'DateTime(DateTime, Format)',
        documentation: '',
        insertText: 'DateTime',
        params: [{
            label: 'DateTime',
            documentation: '',
            insertText: 'DateTime: '
        },
        {
            label: 'Format',
            documentation: '',
            insertText: 'Format: YYYY-MM-DD HH:MI:SS'
        }
        ]
    },
    Code: {
        label: 'Code(some code)',
        documentation: '',
        insertText: 'Code(',
    },
    AppParam: {
        label: 'AppParam(App, Name, Index, Source, Ecosystem)',
        documentation: '',
        insertText: 'AppParam(',
    },
    Chart: {
        label: 'Chart(Type, Source, FieldLabel, FieldValue, Colors)',
        documentation: '',
        insertText: 'Chart(',
        params: [{
            label: 'Type',
            documentation: '',
            insertText: 'Type: '
        },
        {
            label: 'Source',
            documentation: '',
            insertText: 'Source:'
        },
        {
            label: 'FieldLabel',
            documentation: '',
            insertText: 'FieldLabel:'
        },
        {
            label: 'FieldValue',
            documentation: '',
            insertText: 'FieldValue:'
        },
        {
            label: 'Colors',
            documentation: '',
            insertText: 'Colors:'
        }
        ]
    },
    InputMap: {
        label: 'InputMap(Name, Value, Type:polygon, MapType)',
        documentation: 'MapType:hybrid|roadmap|satellite|terrain',
        insertText: 'InputMap(Type:polygon, Name:',
        params: [{
            label: 'Name',
            documentation: '',
            insertText: 'Name: '
        },
        {
            label: 'Value',
            documentation: '',
            insertText: 'Value:'
        },
        {
            label: 'Type',
            documentation: '',
            insertText: 'Type:'
        },
        {
            label: 'MapType',
            documentation: '',
            insertText: 'MapType:'
        }
        ]
    },
    Map: {
        label: 'Map(Hmap, Value, MapType)',
        documentation: 'MapType:hybrid|roadmap|satellite|terrain',
        insertText: 'InputMap(',
        params: [
            {
                label: 'Value',
                documentation: '',
                insertText: 'Value:'
            },
            {
                label: 'MapType',
                documentation: '',
                insertText: 'MapType:'
            },
            {
                label: 'Hmap',
                documentation: '',
                insertText: 'Hmap:'
            }
        ]
    },
    QRcode: {
        label: 'QRcode(Text)',
        documentation: '',
        insertText: 'QRcode(',
        params: [
            {
                label: 'Text',
                documentation: '',
                insertText: 'Text:'
            }
        ]
    },
    Binary: {
        label: 'Binary(Name, AppID, MemberID)[.ById(ID)]',
        documentation: 'Binary().ById(ID)',
        insertText: 'Binary().ById(',
        params: []
    },
    Money: {
        label: 'Money(Exp, Digit)  Exp/10^Digit',
        documentation: '',
        insertText: 'Money(',
        params: []
    },
    Hint: {
        label: 'Hint(Icon,Title,Text)',
        documentation: '',
        insertText: 'Hint(',
        params: []
    },
    AddressToId: {
        label: 'AddressToId(Wallet)',
        documentation: '',
        insertText: 'AddressToId(',
        params: []
    },
}

exports.completions = functionDefs