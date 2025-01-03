# Swift 中文GBK乱码解决方案


## String.Encoding GBK编码支持，然后对String编码时直接使用gbk即可。
```swift
# GBK编码, 使用GB18030是因为它向下兼容GBK
let cfEnc = CFStringEncodings.GB_18030_2000
let enc = CFStringConvertEncodingToNSStringEncoding(CFStringEncoding(cfEnc.rawValue))
let gbk = String.Encoding.init(rawValue: enc)
```

可直接使用:
```swift
extension String.Encoding{
    public static let gbk: String.Encoding = {
        let cfEnc = CFStringEncodings.GB_18030_2000
        let enc = CFStringConvertEncodingToNSStringEncoding(CFStringEncoding(cfEnc.rawValue))
        let gbk = String.Encoding.init(rawValue: enc)
        return gbk
    }()
}
```


## 优化：可对String.Encoding进行扩展
```swift
extension String.Encoding{
    public static let gbk: String.Encoding = .init(rawValue:CFStringConvertEncodingToNSStringEncoding(CFStringEncoding(CFStringEncodings.GB_18030_2000.rawValue)))
}
```

## 再优化：直接使用enc的原始值(2147485234) 创建GBK编码，可用于纯Swift的项目
```swift
extension String.Encoding{
    public static let gbk: String.Encoding = .init(rawValue: 2147485234)
}
```


