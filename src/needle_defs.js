const functionDefs = {
    LangRes: {
        label: 'LangRes(appID int, name, lang string) string',
        documention: '',
        insertText: 'LangRes(',
        params: []
    },
    CallContract: {
        label: 'CallContract(name string, params map)',
        documentation: '',
        insertText: 'CallContract(',
        params: []
    },
    ContractAccess: {
        label: 'ContractAccess(...name string) bool',
        documentation: '',
        insertText: 'ContractAccess(',
        params: []
    },
    ContractConditions: {
        label: 'ContractConditions(name [,name] string) bool',
        documentation: '',
        insertText: 'ContractConditions(',
        params: []
    },
    EvalCondition: {
        label: 'EvalCondition(table, name, condfield string)',
        documentation: '',
        insertText: 'EvalCondition(',
        params: []
    },
    ValidateCondition: {
        label: 'ValidateCondition(condition string, ecosystemid int)',
        documentation: '',
        insertText: 'ValidateCondition(',
        params: []
    },
    AddressToId: {
        label: 'AddressToId(address string) int',
        documentation: '',
        insertText: 'AddressToId(',
        params: []
    },
    IdToAddress: {
        label: 'IdToAddress(id int) string',
        documentation: '',
        insertText: 'IdToAddress(',
        params: []
    },
    Contains: {
        label: 'Contains(in, find string) bool',
        documentation: '',
        insertText: 'Contains(',
        params: []
    },
    Float: {
        label: 'Float(val int|string) float',
        documentation: '',
        insertText: 'Float(',
        params: []
    },
    HasPrefix: {
        label: 'HasPrefix(in, prefix string) bool',
        documentation: '',
        insertText: 'HasPrefix(',
        params: []
    },
    HexToBytes: {
        label: 'HexToBytes(hexdata string) bytes',
        documentation: '',
        insertText: 'HexToBytes(',
        params: []
    },
    Join: {
        label: 'Join(in array, sep string) string',
        documentation: '',
        insertText: 'Join(',
        params: []
    },
    JSONToMap: {
        label: 'JSONToMap(json string) map',
        documentation: 'deprecated. Better using JSONEncode',
        insertText: 'JSONToMap(',
        params: []
    },
    Split: {
        label: 'Split(s, sep string) array',
        documentation: '',
        insertText: 'Split(',
        params: []
    },
    Int: {
        label: 'Int(n string|nil|int) int',
        documentation: '',
        insertText: 'Int(',
        params: []
    },
    Len: {
        label: 'Len(a array) int',
        documentation: '',
        insertText: 'Len(',
        params: []
    },
    PubToID: {
        label: 'PubToID(hexkey string) int',
        documentation: '',
        insertText: 'PubToID(',
        params: []
    },
    PubToHex: {
        label: 'PubToHex(pub string|bytes) string',
        documentation: '',
        insertText: 'PubToHex(',
        params: []
    },
    HexToPub: {
        label: 'HexToPub(hexpub string) bytes',
        documentation: '',
        insertText: 'HexToPub(',
        params: []
    },
    Replace: {
        label: 'Replace(s, old, new string) string',
        documentation: '',
        insertText: 'Replace(',
        params: []
    },
    Size: {
        label: 'Size(s string) int',
        documentation: '',
        insertText: 'Size(',
        params: []
    },
    Sha256: {
        label: 'Sha256(s string) string',
        documentation: '',
        insertText: 'Sha256(',
        params: []
    },
    Sprintf: {
        label: 'Sprintf(pattern string, vals...) string',
        documentation: '%d int, %s string, %f float, %v any, %T type value',
        insertText: 'Sprintf(',
        params: []
    },
    Str: {
        label: 'Str(s int|float) string',
        documentation: '',
        insertText: 'Str(',
        params: []
    },
    Substr: {
        label: 'Substr(s string, offset, length int) string',
        documentation: '',
        insertText: 'Substr(',
        params: []
    },
    UpdateLang: {
        label: 'UpdateLang(appID int, name, trans string)',
        documentation: '',
        insertText: 'UpdateLang(',
        params: []
    },
    SysParamString: {
        label: 'SysParamString',
        documentation: '',
        insertText: 'SysParamString(',
        params: []
    },
    SysParamInt: {
        label: 'SysParamInt(name string) int',
        documentation: '',
        insertText: 'SysParamInt(',
        params: []
    },
    UpdateSysParam: {
        label: 'UpdateSysParam(Name, Value, Conditions "optional" string)',
        documentation: '',
        insertText: 'UpdateSysParam("Name,Value,Conditions", ',
        params: []
    },
    EcosysParam: {
        label: 'EcosysParam(name string) string',
        documentation: '',
        insertText: 'EcosysParam(',
        params: []
    },
    DBInsert: {
        label: 'DBInsert(table string, params map)',
        documentation: '',
        insertText: 'DBInsert(',
        params: []
    },
    DBFind: {
        label: 'DBFind(table string)',
        documentation: '.Columns(columns string) .Where(where map) .WhereId(id int) .Order(order string) .Limit(limit int) .Offset(offset int) .Ecosystem(id int) .Row() .One(col string) .Count()',
        insertText: 'DBFind(',
        params: []
    },
    AppParam: {
        label: 'AppParam(app int, name string, ecosystemId int) string',
        documentation: '',
        insertText: 'AppParam(',
        params: []
    },
    DBUpdate: {
        label: 'DBUpdate(table string, id int, params map)',
        documentation: '',
        insertText: 'DBUpdate(',
        params: []
    },
    DBUpdateExt: {
        label: 'DBUpdateExt(table, column string, val (int|string), params map)',
        documentation: '',
        insertText: 'DBUpdateExt(',
        params: []
    },
    DBUpdateSysParam: {
        label: 'DBUpdateSysParam(name, value, conditions string)',
        documentation: '',
        insertText: 'DBUpdateSysParam(',
        params: []
    },
    DecodeBase64: {
        label: 'DecodeBase64(text string) string',
        documentation: '',
        insertText: 'DecodeBase64(',
        params: []
    },
    MoneyTransfer: {
        label: 'MoneyTransfer(Recipient, Amount, Comment "optional" string)',
        documentation: '',
        insertText: 'MoneyTransfer("Recipient,Amount,Comment", ',
        params: []
    },
    NewContract: {
        label: 'NewContract(Value, Conditions, Wallet "optional" string, TokenEcosystem int "optional")',
        documentation: '',
        insertText: 'NewContract("Value,Conditions,Wallet,TokenEcosystem", ',
        params: []
    },
    EditContract: {
        label: 'EditContract(Id int, Value, Conditions, WalletId "optional" string)',
        documentation: '',
        insertText: 'EditContract("Id,Value,Conditions,WalletId",',
        params: []
    },
    ActivateContract: {
        label: 'ActivateContract(Id int)',
        documentation: '',
        insertText: 'ActivateContract("Id", ',
        params: []
    },
    NewEcosystem: {
        label: 'NewEcosystem(Name  string "optional")',
        documentation: '',
        insertText: 'NewEcosystem("Name", ',
        params: []
    },
    NewParameter: {
        label: 'NewParameter(Name, Value, Conditions string)',
        documentation: '',
        insertText: 'NewParameter("Name,Value,Conditions", ',
        params: []
    },
    EditParameter: {
        label: 'EditParameter(Id int, Value, Conditions string)',
        documentation: '',
        insertText: 'EditParameter("Id,Value,Conditions", ',
        params: []
    },
    NewMenu: {
        label: 'NewMenu(Name, Value, Conditions string, Title string "optional")',
        documentation: '',
        insertText: 'NewMenu("Name,Value,Conditions,Title", ',
        params: []
    },
    EditMenu: {
        label: 'EditMenu(Id int, Value, Conditions string, Title string "optional")',
        documentation: '',
        insertText: 'EditMenu("Id,Value,Conditions,Title", ',
        params: []
    },
    AppendMenu: {
        label: 'AppendMenu(Id int, Value string)',
        documentation: '',
        insertText: 'AppendMenu("Id,Value", ',
        params: []
    },
    NewPage: {
        label: 'NewPage(Name, Value, Menu, Conditions string)',
        documentation: '',
        insertText: 'NewPage("Name,Value,Menu,Conditions", ',
        params: []
    },
    EditPage: {
        label: 'EditPage(Id int, Value, Menu, Conditions string)',
        documentation: '',
        insertText: 'EditPage("Id,Value,Menu,Conditions", ',
        params: []
    },
    AppendPage: {
        label: 'AppendPage(Id int, Value string)',
        documentation: '',
        insertText: 'AppendPage("Id,Value", ',
        params: []
    },
    NewLang: {
        label: 'NewLang(Name, Trans string)',
        documentation: '',
        insertText: 'NewLang("Name,Trans", ',
        params: []
    },
    EditLang: {
        label: 'EditLang(Name, Trans string)',
        documentation: '',
        insertText: 'EditLang("Name,Trans", ',
        params: []
    },
    NewSign: {
        label: 'NewSign(Name, Value, Conditions string)',
        documentation: '',
        insertText: 'NewSign("Name,Value,Conditions", ',
        params: []
    },
    EditSign: {
        label: 'EditSign(Id int, Value, Conditions string)',
        documentation: '',
        insertText: 'EditSign("Id,Value,Conditions", ',
        params: []
    },
    NewSnippet: {
        label: 'NewSnippet(Name, Value, Conditions string)',
        documentation: '',
        insertText: 'NewSnippet("Name,Value,Conditions", ',
        params: []
    },
    EditSnippet: {
        label: 'EditSnippet(Id int, Value, Conditions string)',
        documentation: '',
        insertText: 'EditSnippet("Id,Value,Conditions", ',
        params: []
    },
    NewTable: {
        label: 'NewTable(Name, Columns, Permissions string)',
        documentation: '',
        insertText: 'NewTable("Name,Columns,Permissions", ',
        params: []
    },
    EditTable: {
        label: 'EditTable(Name, Permissions string)',
        documentation: '',
        insertText: 'EditTable("Name,Permissions", ',
        params: []
    },
    NewColumn: {
        label: 'NewColumn(TableName, Name, Type, Permissions string)',
        documentation: '',
        insertText: 'NewColumn("TableName,Name,Type,Permissions", ',
        params: []
    },
    EditColumn: {
        label: 'EditColumn(TableName, Name, Permissions string)',
        documentation: '',
        insertText: 'EditColumn("TableName,Name,Permissions", ',
        params: []
    },
    Import: {
        label: 'Import(Data string)',
        documentation: '',
        insertText: 'Import("Data", ',
        params: []
    },
    DeactivateContract: {
        label: 'DeactivateContract(Id int)',
        documentation: '',
        insertText: 'DeactivateContract("Id", ',
        params: []
    },
    GetContractById: {
        label: 'GetContractById(id int) string',
        documentation: '',
        insertText: 'GetContractById(',
        params: []
    },
    GetContractByName: {
        label: 'GetContractByName(s string) int',
        documentation: '',
        insertText: 'GetContractByName(',
        params: []
    },
    StringToBytes: {
        label: 'StringToBytes(s string) bytes',
        documentation: '',
        insertText: 'StringToBytes(',
        params: []
    },
    BytesToString: {
        label: 'BytesToString(s bytes) string',
        documentation: '',
        insertText: 'BytesToString(',
        params: []
    },
    Println: {
        label: 'Println(... any)',
        documentation: '',
        insertText: 'Println(',
        params: []
    },
    JSONEncode: {
        label: 'JSONEncode(n any) string',
        documentation: '',
        insertText: 'JSONEncode(',
        params: []
    },
    JSONEncodeIndent: {
        label: 'JSONEncodeIndent(n any, indent string) string',
        documentation: '',
        insertText: 'JSONEncodeIndent(',
        params: []
    },
    JSONDecode: {
        label: 'JSONDecode(s string) int|float|string|map|array',
        documentation: '',
        insertText: 'JSONDecode(',
        params: []
    },
    UploadBinary: {
        label: 'UploadBinary(ApplicationId int, Name string, Data bytes "file", DataMimeType string "optional")',
        documentation: '',
        insertText: 'UploadBinary("ApplicationId,Name,Data,DataMimeType", ',
        params: []
    },
    GetMapKeys: {
        label: 'GetMapKeys(m map) array',
        documentation: '',
        insertText: 'GetMapKeys(',
        params: []
    },
    SortedKeys: {
        label: 'SortedKeys(m map) array',
        documentation: '',
        insertText: 'SortedKeys(',
        params: []
    },
    ColumnCondition: {
        label: 'ColumnCondition(table, name, type, permissions string)',
        documentation: '',
        insertText: 'ColumnCondition(',
        params: []
    },
    ContractName: {
        label: 'ContractName(code string) string',
        documentation: '',
        insertText: 'ContractName(',
        params: []
    },
    ValidateEditContractNewValue: {
        label: 'ValidateEditContractNewValue(newValue, oldValue string)',
        documentation: '',
        insertText: 'ValidateEditContractNewValue(',
        params: []
    },
    CreateColumn: {
        label: 'CreateColumn(table, name, type, permissions string)',
        documentation: '',
        insertText: 'CreateColumn(',
        params: []
    },
    CreateTable: {
        label: 'CreateTable(name, columns, permissions string, applicationID int)',
        documentation: '',
        insertText: 'CreateTable(',
        params: []
    },
    HMac: {
        label: 'HMac(key, data string, raw bool) string',
        documentation: '',
        insertText: 'HMac(',
        params: []
    },
    Money: {
        label: 'Money(v any) money',
        documentation: '',
        insertText: 'Money(',
        params: []
    },
    NewMoney: {
        label: 'NewMoney(id int, amount, comment string)',
        documentation: 'can be only called from @1NewUser',
        insertText: '',
        params: []
    },
    PermColumn: {
        label: 'PermColumn(table, name, permissions string)',
        documentation: 'can be only called from @1EditColumn',
        insertText: '',
        params: []
    },
    PermTable: {
        label: 'PermTable(name, permissions string)',
        documentation: 'can be only called from @1EditTable',
        insertText: '',
        params: []
    },
    Random: {
        label: 'Random(min, max int) int',
        documentation: '',
        insertText: 'Random(',
        params: []
    },
    TrimSpace: {
        label: 'TrimSpace(s string) string',
        documentation: '',
        insertText: '',
        params: []
    },
    ToLower: {
        label: 'ToLower(s string) string',
        documentation: '',
        insertText: 'ToLower(',
        params: []
    },
    ToUpper: {
        label: 'ToUpper(s string) string',
        documentation: '',
        insertText: 'ToUpper(',
        params: []
    },
    CreateEcosystem: {
        label: 'CreateEcosystem(wallet int, name string) int',
        documentation: 'can be only called from @1NewEcosystem',
        insertText: 'CreateEcosystem(',
        params: []
    },
    RollbackEcosystem: {
        label: 'RollbackEcosystem()',
        documentation: 'can be only called from @1NewEcosystem',
        insertText: 'RollbackEcosystem(',
        params: []
    },
    CreateContract: {
        label: 'CreateContract(name, value, conditions string, wallet, token, appID int)',
        documentation: 'can be only called from @1NewContract',
        insertText: 'CreateContract(',
        params: []
    },
    UpdateContract: {
        label: 'UpdateContract(id int, value, conditions, walletID string, recipient int, active, token string)',
        documentation: 'can be only called from @1EditContract',
        insertText: '',
        params: []
    },
    RollbackTable: {
        label: 'RollbackTable(name string)',
        documentation: 'can be only called from @1NewTable',
        insertText: 'RollbackTable(',
        params: []
    },
    TableConditions: {
        label: 'TableConditions(name, columns, permissions string)',
        documentation: 'can be only called from: @1NewTable, @1Import, @1EditTable',
        insertText: 'TableConditions(',
        params: []
    },
    RollbackColumn: {
        label: 'RollbackColumn(table, name string)',
        documentation: 'can be only called from @1NewColumn',
        insertText: 'RollbackColumn(',
        params: []
    },
    CreateLanguage: {
        label: 'CreateLanguage(name, trans string, appID int) int',
        documentation: 'can be only called from @1NewLang',
        insertText: 'CreateLanguage(',
        params: []
    },
    EditLanguage: {
        label: 'EditLanguage(id int, name, trans string, appID int)',
        documentation: 'can be only called from @1EditLang or @1Import',
        insertText: 'EditLanguage(',
        params: []
    },
    Activate: {
        label: 'Activate(tableId int, state int)',
        documentation: 'can be only called from @1ActivateContract or @1DeactivateContract',
        insertText: 'Activate(',
        params: []
    },
    Deactivate: {
        label: 'Deactivate(tableId int, state int)',
        documentation: 'can be only called from @1ActivateContract or @1DeactivateContract',
        insertText: 'Deactivate(',
        params: []
    },
    RollbackContract: {
        label: 'RollbackContract(name string)',
        documentation: '',
        insertText: 'RollbackContract(',
        params: []
    },
    RollbackEditContract: {
        label: 'RollbackEditContract()',
        documentation: 'can be only called from @1EditContract',
        insertText: 'RollbackEditContract()',
        params: []
    },
    RollbackNewContract: {
        label: 'RollbackNewContract(value string)',
        documentation: '',
        insertText: 'RollbackNewContract(',
        params: []
    },
    RowConditions: {
        label: 'RowConditions(table string, id int, conditionOnly bool)',
        documentation: '',
        insertText: 'RowConditions(',
        params: []
    },
    EncodeBase64: {
        label: 'EncodeBase64(in string) string',
        documentation: '',
        insertText: 'EncodeBase64(',
        params: []
    },
    MD5: {
        label: 'MD5(val any) string',
        documentation: '',
        insertText: 'MD5(',
        params: []
    },
    EditEcosysName: {
        label: 'EditEcosysName(sysID int, newName string)',
        documentation: 'can be only called from @1EditEcosystemName',
        insertText: 'EditEcosysName(',
        params: []
    },
    GetColumnType: {
        label: 'GetColumnType(table, column string) string',
        documentation: '',
        insertText: 'GetColumnType(',
        params: []
    },
    GetType: {
        label: 'GetType(val any) string',
        documentation: '',
        insertText: 'GetType(',
        params: []
    },
    AllowChangeCondition: {
        label: 'AllowChangeCondition(table string)',
        documentation: '',
        insertText: 'AllowChangeCondition(',
        params: []
    },
    SetPubKey: {
        label: 'SetPubKey(id int, pubKey bytes) int',
        documentation: 'can be only called from NewUser contract',
        insertText: 'SetPubKey(',
        params: []
    },
    Append: {
        label: 'Append(ar array, val any) array',
        documentation: '',
        insertText: 'Append(',
        params: []
    },
    DateTime: {
        label: 'DateTime(unixtime int) string',
        documentation: '',
        insertText: 'DateTime(',
        params: []
    },
    UnixDateTime: {
        label: 'UnixDateTime(datetime string) int',
        documentation: 'format datetime: "YYYY-MM-DD HH:MI:SS"',
        insertText: 'DateTime(',
        params: []
    },
    RoleAccess: {
        label: 'RoleAccess(id int, [id int]) bool',
        documentation: '',
        insertText: 'RoleAccess(',
        params: []
    },
    TransactionInfo: {
        label: 'TransactionInfo(hash: string) string',
        documentation: 'returned: {"contract":ContractName, "params":object, "block": int}',
        insertText: 'TransactionInfo(',
        params: []
    },
    UpdateRolesNotifications: {
        label: 'UpdateRolesNotifications(ecosystemID int, roles int ...)',
        documentation: '',
        insertText: 'UpdateRolesNotifications(',
        params: []
    },
    UpdateNotifications: {
        label: 'UpdateNotifications(ecosystemID int, keys int ...)',
        documentation: '',
        insertText: 'UpdateNotifications(',
        params: []
    },
    FormatMoney: {
        label: 'FormatMoney(exp string, digit int)',
        documentation: '',
        insertText: 'FormatMoney(',
        params: []
    },
    Log: {
        label: 'Log(x float|int|string) float',
        documentation: '',
        insertText: 'Log(',
        params: []
    },
    Log10: {
        label: 'Log10(x float|int|string) float',
        documentation: '',
        insertText: 'Log10(',
        params: []
    },
    Pow: {
        label: 'Pow(x float|int|string, y float|int|string) float',
        documentation: '',
        insertText: 'Pow(',
        params: []
    },
    Sqrt: {
        label: 'Sqrt(x float|int|string) float',
        documentation: '',
        insertText: 'Sqrt(',
        params: []
    },
    Round: {
        label: 'Round(x float|int|string) int',
        documentation: '',
        insertText: 'Round(',
        params: []
    },
    Floor: {
        label: 'Floor(x float|int|string) int',
        documentation: '',
        insertText: 'Floor(',
        params: []
    },
}

exports.completions = functionDefs