# SwiftUI：List详解



## 1. 隐藏/取消List的分割线
iOS 13.0+  (全局效果)
```swift
List (0..<50) { index in
      Text("\(index)")
 }
 .onAppear {
      UITableView.appearance().separatorStyle = .none
 }
```
iOS 14.0+
```swift
List (0..<50) { index in
      Text("\(index)")
 }
.listStyle(SidebarListStyle())
```
iOS 15.0+
```swift
func listRowSeparator(_ visibility: Visibility, edges: VerticalEdge.Set = .all) -> some View

其调用方式为
List (0..<50) { index in
      Text("\(index)")
          .listRowSeparator(.hidden)
 }
```
其他的方式可参考[ stackoverflow](https://stackoverflow.com/questions/62597493/how-to-remove-list-separator-lines-in-swiftui-2-0-in-ios-14/62598818#62598818)对应问答
详情以[Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/canvas/listrowseparator(_:edges:)/)为准

<br>

## 2.设置左滑删除Cell

```swift
struct ListViewDemo: View {
    
    //数据数组
    @State private var streets = [Street(name: "The Lodon Street"), Street(name: "The Joe's Street"), Street(name: "The House Street")]
    
    var body: some View {
        
        func deleteRow(at offsets:IndexSet) {
            streets.remove(atOffsets:offsets)
        }
        
        return List{
            ForEach(streets, id: \.self) { street in
                StreetRow(street: street)
            }.onDelete(perform: deleteRow)
        }
    }
}
```



## 3. List添加section分组以及设置grouped类型
```swift
struct ListViewDemo: View {
    var body: some View {
        return List{
            Section(header:Text("some streets one"), footer: Text("Fotter1")){
                TaskRow()
                TaskRow()
                TaskRow()
            }
            Section(header:Text("some streets two"), footer: Text("Fotter2")){
                TaskRow()
                TaskRow()
                TaskRow()
            }
        }
    }
}

struct TaskRow: View {
    var body: some View {
        Text("Task data goes here")
    }
}

```
在UITableView中我们可以设置plain和grouped两种样式，而默认是plain样式，SwiftUI也一样。在swiftUI中设置grouped样式很简单，只需要为list添加相应的listStyle modifier：
```swift
struct ListViewDemo: View {
    var body: some View {
        return List{
            Section(header:Text("some streets one"), footer: Text("Fotter1")){
                TaskRow()
                TaskRow()
                TaskRow()
            }
            Section(header:Text("some streets two"), footer: Text("Fotter2")){
                TaskRow()
                TaskRow()
                TaskRow()
            }
        }.listStyle(GroupedListStyle())
    }
}
```

<br>

## 4. 点击Cell跳转的实现
```swift
struct ListViewDemo: View {
    var body: some View {
        let streets = [
        Street(name: "The Lodon Street"), 
        Street(name: "The Joe's Street"), 
        Street(name: "The House Street")
        ]
        
        return NavigationView{
            List(streets){ street in
                NavigationLink(destination:ListViewDetial()){
                    StreetRow(street: street)
                }
            }.navigationBarTitle("Streets")
        }
    }
}
```

<br>

## 5. 去除Cell右边自带的箭头
NavigationLink会自动为List的Cell添加一个箭头，要想去掉箭头将Cell 放在NavigationLink的外边即可
```swift
   struct ListViewDemo: View {
        var body: some View {
            let streets = [
            Street(name: "The Lodon Street"),
            Street(name: "The Joe's Street"),
            Street(name: "The House Street")
            ]

            return NavigationView{
                List(streets){ street in
                    ZStack{
                        NavigationLink(destination:ListViewDetial()){
                            EmptyView()
                        }

                        StreetRow(street: street)
                    }

                }.navigationBarTitle("Streets")
            }
        }
    }

```