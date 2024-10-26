# iOS 动态获取TeamID（又名AppIdentifierPrefix）

在iOS中，使用Keychain可以把我们要存储的数据以加密的形式存储在独立于App的位置。 

通过当前项目的Capabilities>Keychain Sharing>On开启Keychain后，会自动生成一个对应的Keychain Groups，以及一个entitlements文件，文件里会有一个Keychain Access Groups，这里存储了所有想要共享部分Keychain数据的App对应的keychain groups的ID，默认第一项名为“(teamID).你的bundleID”。这个(teamID)就是你开发者账号的teamID，xcode之前的版本也写做${AppIdentifierPrefix}。

那么怎么获取这个teamID，从而避免硬编码呢。示例代码如下：

## OC
```objective-c
/** 获取TeamID，又名AppIdentifierPrefix  */
+ (NSString *)teamID
{
    NSDictionary *query = @{(id)kSecClass:(id)kSecClassGenericPassword,
                            (id)kSecAttrAccount:@"bundleSeedID",
                            (id)kSecAttrService:@"",
                            (id)kSecReturnAttributes:(id)kCFBooleanTrue
    };
    CFDictionaryRef result = nil;
    OSStatus status = SecItemCopyMatching((CFDictionaryRef)query, (CFTypeRef *)&result);
    if (status == errSecItemNotFound)
        status = SecItemAdd((CFDictionaryRef)query, (CFTypeRef *)&result);
    if (status != errSecSuccess)
        return nil;
    NSString *accessGroup = [(__bridge NSDictionary *)result objectForKey:(id)kSecAttrAccessGroup];
    NSArray *components = [accessGroup componentsSeparatedByString:@"."];
    NSString *teamID = [[components objectEnumerator] nextObject];
    CFRelease(result);
    return teamID;
}

```

## Swift
```swift
func teamID() -> String {
    let unknown = "unknown"
    let query = NSDictionary(dictionaryLiteral:(kSecClass,kSecClassGenericPassword),
                             (kSecAttrAccount,"bundleSeedID"),
                             (kSecAttrService,""),
                             (kSecReturnAttributes,kCFBooleanTrue as Any)
    )
    var result:CFTypeRef?
    var status = SecItemCopyMatching(query, &result)
    if status  == errSecItemNotFound{
        status = SecItemAdd(query, &result)
    }
    if status != errSecSuccess{
        return unknown
    }
    let accessGroup:String = result?.object(forKey: kSecAttrAccessGroup)! as! String
    let components = accessGroup.components(separatedBy: ".")
    let teamID = components.first!
    return teamID
}
```

## PS
Keychain 中默认的``accessGroup``为:``teamID.bundleID``，例如:``39E8LGDFGR.com.company.test``