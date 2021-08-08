# What is the Web Storage API?
The Web Storage API is a set of mechanisms that enable browsers to store key-value pairs. It is designed to be much more intuitive than using cookies.

The key-value pairs represent storage objects, which are similar to objects except they remain intact during page loads, and are always strings. You can access these values like an object or using the getItem() method (more on that later).

# What is the difference between sessionStorage and localStorage?
The Web Storage API consists of two mechanisms: sessionStorage and localStorage. Both sessionStorage and localStorage maintain a separate storage area for each available origin for the duration of the page session.

The main difference between sessionStorage and localStorage is that sessionStorage only maintains a storage area while the browser is open (including when the page reloads or restores) while localStorage continues to store data after the browser is closed. In other words, whereas data stored in sessionStorage is cleared when the page is closed, data stored in localStorage does not expire.

# for each
const a = ["a", "b", "c"];
a.forEach((entry) => {
    console.log(entry);
});
// a b c

* notes -> when passing a range first one is inclusive and the last one is exclusive

# slice


The arr.slice() method returns a new array containing a portion of the array on which it is implemented. The original remains unchanged.

```
<script>
function func() {
  
    // Original Array
    var arr = [23,56,87,32,75,13];
  
    // Extracted array
    var new_arr = arr.slice(2,4);
    document.write(arr);
    document.write("<br>");
    document.write(new_arr);
}
func();
</script>
Output:
[23,56,87,32,75,13]
[87,32]
```

```
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice();
document.write(arr);
document.write(new_arr);
Output:

[23,56,87,32,75,13]
[23,56,87,32,75,13]

```
```
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2);
document.write(arr);
document.write(new_arr);
Output:

[23,56,87,32,75,13]
[87,32,75,13]
```