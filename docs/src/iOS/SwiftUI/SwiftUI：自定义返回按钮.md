# SwiftUI 自定义返回按钮



## 一：NavigationView：实现自定义返回按钮


使用NavigationView，NavigationLink实现导航效果：
```swift
struct BackView: View {
    var array = ["1", "2", "33"]
    var body: some View {
        NavigationView {
            List(array, id: \.self) { value in
                NavigationLink(destination: DetailView()) {
                    Text(value)
                }
                .isDetailLink(false)//隐藏自带的返回按钮
            }
           //.navigationBarTitle("Navigation")
           .navigationBarTitle("Navigation",displayMode: .inline)//设置NavView显示模式
        }
    }
}
```
自定义返回按钮：
```swift
struct DetailView: View {
    @Environment(\.presentationMode) var presentationMode

    var body: some View {
        VStack {

        }
        .navigationBarItems(leading: Button(action: {
            print("back action...")
            self.presentationMode.wrappedValue.dismiss()
        }, label: {
            Text("Back")
                .foregroundColor(.white)
        })
        )
    }
}
```

扩展实现侧滑返回:
```swift
//扩展实现侧滑返回
extension UINavigationController: UIGestureRecognizerDelegate {
    override open func viewDidLoad() {
        super.viewDidLoad()
        interactivePopGestureRecognizer?.delegate = self
    }

    public func gestureRecognizerShouldBegin(_ gestureRecognizer: UIGestureRecognizer) -> Bool {
        return viewControllers.count > 1
    }
}
```
<br>
