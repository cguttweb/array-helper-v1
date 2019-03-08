<template>
  <div class="row">
    <div class="col-12">
      <h1>{{ header }}</h1>
      <p>{{ info }}</p>
      <input
        class="mb-3 p-2 align-center"
        v-model="searchValue"
        type="text"
        placeholder="Search for a method"
      >
      <form>
        <input
          class="mb-3 p-2"
          placeholder="Method name"
          type="text"
          @keyup.enter="addMethod"
          v-model="newMethodName"
        >
        <input
          class="p-2"
          placeholder="Enter method"
          type="text"
          @keyup.enter="addMethod"
          v-model="newMethod"
        >
        <button class="btn btn-success" type="button" @click="addMethod()">Add Method</button><br>
      </form>
    </div>
    <div class="col-6" style="height:720px;overflow:scroll;padding-right:0;">
      <ul class="list-group">
        <li @click="getExample(method)"
          class="list-group-item text-left"
          v-for="(method, index) in filteredArray"
          v-bind:key="index"
        >
          <strong>{{ method.name }}</strong>
          {{ method.method }}
          <!-- <button type="button" v-clipboard:copy="message" v-clipboard:success="onCopy" v-clipboard:error="onError">Copy</button> -->
        </li>
      </ul>
    </div>
    <div class="col-6">
      <textarea class="bg-dark col pt-3 text-white" name="exampleBox" id="exampleBox" rows="15" v-model="example">
      </textarea>
      <!-- <button type="button" @click="runCode">Run Code</button> -->
    </div>
  </div>
</template>

<script>
export default {
  // data needs to be a function and return an object
  data() {
    return {
      header: 'Array Helper',
      info: 'Use the search below to learn about array methods',
      searchValue: '',
      newMethodName: '',
      newMethod: '',
      message: '',
      example: '',
      arrayMethods: [
        {
          name: 'concat',
          method: 'This method will join two or more arrays together',
          methodExample:
            'let array1 = [1 , 2, 3]\r\rlet array2 = [4, 5, 6]\r\rarray1.concat(array2)\r\r// output: [1, 2, 3, 4, 5, 6]'
        },
        {
          name: 'copyWithin',
          method: 'copies part of an array to another location in the same array',
          methodExample:
            'let array = ["a", "b", "c", "d", "e"]\r\rarray.copyWithin(1, 3, 4)\r\routput: ["a", "d", "e", "d", "e"]'
        },
        {
          name: 'every',
          method:
            'tests whether all elements in array pass the test given by function provided. This returns true for any condition on an empty array.',
          methodExample:
            'let array1 = [1, 30, 39, 29, 10, 13];\r\rfunction checkNumbers(number){\r  return number > 20;\r}\r\rnumArray.every(checkNumbers)\r //output: false as not all numbers are above 20\r//Note: this will return true for any empty array'
        },
        {
          name: 'filter',
          method:
            'creates a new array with all elements that pass the test given in the provided function',
          methodExample:
            'let fruits = ["orange", "strawberry", "blueberry", "banana", "apple"]\rfruits.filter(function(fruit){\r return fruit.length < 6 \r});\r// output: ["apple"]'
        },
        {
          name: 'find',
          method: 'returns value of first element that matches the provided function',
          methodExample:
            'let cities = ["London", "Liverpool", "Southampton", "New York", "Boston", "Toronto"]\r\rlet findCities = cities.find(function(el){\r return el.length > 6; \r});\r\r// output: "Liverpool"'
        },
        {
          name: 'forEach',
          method:
            'similar to a for loop this will execute the provided function for each element in the array',
          methodExample:
            'let cities = ["London", "Liverpool", "New York", "Boston"]\r\rcities.forEach(function(el){\rconsole.log(el)\r})\r//output: \rLondon\rLiverpool\rNew York\rBoston'
        },
        {
          name: 'includes',
          method:
            'checks whether given value is included in selected array outputs a Boolean value',
          methodExample:
            'let teams = ["liverpool", "arsenal", "chelsea"]\r\rteams.includes("liverpool")\r\r// output: true'
        },
        {
          name: 'indexOf',
          method: 'gives an index value of given element.',
          methodExample:
            'let teams = ["Liverpool", "Man City", "Tottenham Hotspur", "Arsenal"]\r\rteams.indexOf("Arsenal")\r\r// output: 3'
        },
        {
          name: 'isArray',
          method: 'checks whether the passed value is an array and returns true or false',
          methodExample:
            'Array.isArray("hello")\r\r//outputs: false as hello is a string\r\rArray.isArray([1, 2, 3])\r\r//output: true'
        },
        {
          name: 'join',
          method: 'join the elements in an array',
          methodExample: 'let array1 = [1, 2, 3]\r\rarray1.join(" ")\r\r//output: 1 2 3'
        },
        {
          name: 'lastIndexOf',
          method:
            'array is searched backwards it gives the last index value of given element will return -1 if not present',
          methodExample:
            'let cities = ["London", "Liverpool", "Southampton", "New York", "Boston", "Toronto"]\r\rcities.lastIndexOf(Boston)\r\r//output: 4'
        },
        {
          name: 'map',
          method: 'this is an alternative to using sort if there is a number of elements',
          methodExample:
            'const numbers = [2, 34, 76, 218]\r\rconst doubledNum = numbers.map(function(num) {\r return num * 2;\r});\r\r// output: [4, 68, 152, 436]\r\rlet cities = ["London", "New York", "Boston", "Toronto"]\r\rconst cities2 = cities.map(function(city){\r return city.length > 6;\r})\r\routput: ["false","true","false","true"]'
        },
        {
          name: 'pop',
          method: 'remove the last element from an array',
          methodExample:
            'let myArray = ["learning", "about", "array", "methods"]\r\rmyArray.pop()\r\r// output: ["learning", "about", "array"]'
        },
        {
          name: 'push',
          method: 'add element to the end of an array',
          methodExample:
            'let myArray = [1, 2, 3, 4, 5]\r\rmyArray.push("test")\r\r//output: [1, 2, 3, 4, 5, "test"]'
        },
        {
          name: 'reduce',
          method: 'reduces an array to a single value using a reductor function',
          methodExample:
            'let num = [1, 3, 5, 8, 10]\r\rconst reducer = (accumulator, currentValue) => accumulator + currentValue;\r\r//output: 27'
        },
        {
          name: 'reverse',
          method: 'reverses the values in the provided array',
          methodExample:
            'let myArray = ["one", "two", "three"]\r\rmyArray.reverse()\r\r //output: ["three", "two", "one"]'
        },
        {
          name: 'shift',
          method: 'removes the first element of an array',
          methodExample:
            'let myArray = ["hello", "world"];\r\rmyArray.shift()\r\r // output: ["world"]'
        },
        {
          name: 'slice',
          method:
            'returns a copy of part of an array into a new array object. It does not modify the existing array',
          methodExample:
            'let cities = ["London", "Liverpool", "Southampton", "New York", "Boston", "Toronto"]\r\rcities.slice(1, 4)\r\r// Starts at 1st index extracts elements 1, 2 and 3\r\r//output:  ["Liverpool", "Southampton", "New York"]\r\r// cities is still ["London", "Liverpool", "Southampton", "New York", "Boston", "Toronto"]'
        },
        {
          name: 'sort',
          method: 'sorts the elements of array in place and returns array.',
          methodExample:
            'let numbers = [24, 512, 76, 123]\rnumbers.sort()\r//output: [123, 24, 512, 76]\rlet months = ["Feb", "March", "April", "July"]\r//output: ["April", "Feb", "July", "March"]'
        },
        {
          name: 'splice',
          method:
            'changes content of an array by removing existing elements and/or adding new elements',
          methodExample:
            'let cities = ["London", "Liverpool", "Southampton", "New York", "Boston", "Toronto"]\r\rcities.splice(3, 1, "Philadephia")\r\r//replaces 1 element at 3rd index so New York is replaced by Philadelphia\r\r//outputs: ["London", "Liverpool", "Southampton", "Philadephia", "Boston", "Toronto"]'
        },
        {
          name: 'toString',
          method: 'converts the array elements to a string',
          methodExample:
            'let myArray = [1, "two", 3, "four"]\r\rmyArray.toString()\r\r//output: "1,two,3,four"'
        },
        {
          name: 'unshift',
          method: 'add 1 or more elements to the front of an array',
          methodExample:
            'let myArray = ["you are learning javascript array methods"]\r\rmyArray.unshift("Hello")\r\r// output: ["Hello", "you are learning JavaScript array methods"]'
        }
      ]
    };
  },
  methods: {
    addMethod() {
      this.arrayMethods.push({
        name: this.newMethodName,
        method: this.newMethod
      });
      this.newMethodName = '';
      this.newMethod = '';
    },
    getExample(method) {
      this.example = method.methodExample;
    },
    runCode() {}
  },
  computed: {
    filteredArray() {
      let searchTerm = this.searchValue.toLowerCase();
      return this.arrayMethods.filter(method => {
        return method.name.toLowerCase().includes(searchTerm);
      });
    }
  }
};
// };
</script>

<style lang="scss">
$vuegreen: #41b883;
</style>


