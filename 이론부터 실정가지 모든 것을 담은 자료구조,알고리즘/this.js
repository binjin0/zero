/**
 * this
 메서드에서 객체 내부의 속성값을 접근할 수 있는 지시자

 */
let user = { name: "john" };
let admin = { name: "admin" };

//hello_func 내 this 값은 런타임에 결정 (암시적 바인딩)

function hello_func() {
  console.log("hello" + this.name);
}
user.func = hello_func; //user.func 수행 시 (this==user.name)
admin.func = hello_func; //admin.func 수행 시 (this==admin.name)

user.func();
admin.func();

user["func"];
admin["func"];
