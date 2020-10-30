// const container = document.getElementById("list");
// for( let i=0; i<3 ; i++){
//     container.insertAdjacentHTML('aftereend',`<li>${i}</li>` );
// }

// 1-d
// 2-a 
// 3-c 
// 4- b 



const time = setInterval(myTime, 5000);

function myTime() {
  alert("Hello world!");
}
clearInterval(myTime,alert("Bye bye"),11000);




// LET là một biến được khai báo có scope là block scope nên khi chúng ta khai báo trong hàm
// ra ngoài khỏi hàm đó sẽ không sử dụng được nữa.

// VAR là một biến có scope là globally scoped. Sau khi chúng ta khai báo trong hàm(if, function,...)
// ra ngoài của hàm thì giá trị của biến vẫn được giữ nguyên
