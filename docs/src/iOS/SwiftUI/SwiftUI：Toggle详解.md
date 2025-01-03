# SwiftUI：Toggle详解



## 1.自定义样式
使用：
```swift
Toggle(isOn: $userData.showFavoritesOnly) {
   Text("Show Favorites Only")
}
.toggleStyle(MyToggleStyle())
```
ToggleStyle，可以根据该模板定制
```swift
struct MyToggleStyle:ToggleStyle {
    let width: CGFloat = 50
    let height:CGFloat = 30
    var onColor:Color  = .green
    var offColor:Color = .init(UIColor.systemGray5)
    var isAnimation = true

    func makeBody(configuration: Configuration) -> some View {
        HStack {
            configuration.label
            Spacer()
            ZStack(alignment: configuration.isOn ? .trailing : .leading) {
                Spacer()
                RoundedRectangle(cornerRadius: width/2.0)
                    .frame(width: width, height: height)
                    .foregroundColor(configuration.isOn ? onColor : offColor)

                RoundedRectangle(cornerRadius: (height-4)/2.0)
                    .frame(width: height-4 , height: height-4)
                    .padding(2)
                    .foregroundColor(.white)
                    .animation(isAnimation ? .easeIn(duration: 0.15) : nil)
                    .onTapGesture {
                        configuration.$isOn.wrappedValue.toggle()
                    }
            }
        }
    }
}
```
条件判断是否能点击Toggle
```swift
@State var tmpState:Bool = false //临时状态

Toggle(isOn:$tmpState) {
    Text("Click check..")
}
.onTapGesture {
    print("inOn:\(tmpState) 检查是否符合条件，如果不符合就还原状态")
    DispatchQueue.global().asyncAfter(deadline: DispatchTime.now()+0.3) {
        print("还原状态")
        withAnimation(Animation.easeIn(duration: 0.15)){
            tmpState.toggle()
        }
    }
}
```
## 2.使用自定义样式后，为Toggle添加onTapGesture无效的解决方法
由于SwiftUI的Gesture事件是先由子控件触发，所以可以使用simultaneousGesture ()修饰符告诉SwiftUI您希望父手势和子手势同时触发，如：
```swift
//替换原来得.onTapGesture
Toggle(isOn:$tmpState) {
    Text("Click check..")
}
.toggleStyle(MyToggleStyle())//自定义样式中使用了onTapGesture，所以需要.simultaneousGesture
.simultaneousGesture(
    TapGesture()
        .onEnded{
            print("inOn:\(tmpState) 检查是否符合条件，如果不符合就还原状态")
            DispatchQueue.global().asyncAfter(deadline: DispatchTime.now()+0.3) {
                print("还原状态")
                withAnimation(Animation.easeIn(duration: 0.15)){
                    tmpState.toggle()
                }
            }
        }
)
//.simultaneousGesture可以使用多个，如果有多个.simultaneousGesture，则先执行后添加的.simultaneousGesture
```