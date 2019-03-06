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
    <div class="col-6" style="width:50%">
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
      <textarea class="bg-dark col text-white p-3" name="exampleBox" id="exampleBox" rows="40" v-model="example"></textarea>
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
            'let array1 = [1 , 2, 3] \nlet array2 = [4, 5, 6] \narray1.concat(array2) \n// output: [1, 2, 3, 4, 5, 6]'
        },
        {
          name: 'copyWithin',
          method: 'copies part of an array to another location in the same array',
          methodExample: ''
        },
        {
          name: 'every',
          method:
            'tests whether all elements in array pass the test given by function provided. This returns true for any condition on an empty array.',
          methodExample: ''
        },
        {
          name: 'filter',
          method:
            'creates a new array with all elements that pass the test given in the provided function',
          methodExample: ''
        },
        {
          name: 'find',
          method: 'find given value within an array',
          methodExample: ''
        },
        {
          name: 'includes',
          method:
            'checks whether given value is included in selected array outputs a Boolean value',
          methodExample:
            'let teams = ["liverpool", "arsenal", "chelsea"]\r teams.includes("liverpool")\r // output: true'
        },
        {
          name: 'indexOf',
          method:
            'gives an index value of given element will return -1 if element is not present',
          methodExample: ''
        },
        {
          name: 'isArray',
          method: 'checks whether the passed value is an array and returns true or false',
          methodExample:
            'Array.isArray("hello")\r// outputs: false \rArray.isArray([1, 2, 3]) \r// outputs true'
        },
        {
          name: 'join',
          method: 'join the elements in an array',
          methodExample: 'let array1 = [1 , 2, 3] array1.join()'
        },
        {
          name: 'lastIndexOf',
          method:
            'array is searched backwards it gives the last index value of given element will return -1 if not present',
          methodExample: ''
        },
        {
          name: 'map',
          method: 'this is an alternative to using sort if there is a number of elements',
          methodExample: ''
        },
        {
          name: 'pop',
          method: 'remove the last element from an array',
          methodExample: ''
        },
        {
          name: 'push',
          method: 'add element to the end of an array',
          methodExample:
            'let myArray = [1, 2, 3, 4, 5] \rmyArray.push("test") \r// output: [1, 2, 3, 4, 5, "test"]'
        },
        {
          name: 'reduce',
          method: 'reduces an array to a single value',
          methodExample: ''
        },
        {
          name: 'shift',
          method: 'removes the first element of an array',
          methodExample:
            'let myArray = ["hello", "world"];\r myArray.shift()\r // output: ["world"]'
        },
        {
          name: 'slice',
          method:
            'returns a shallow copy of portion of an array into a new array object. It does not modify the existing array',
          methodExample: ''
        },
        {
          name: 'sort',
          method:
            'sorts the elements of array in place and returns array. If using sort elements are converted to strings and compared in unicode point value so numbers will take priority',
          methodExample: ''
        },
        {
          name: 'splice',
          method:
            'changes content of an array by removing existing elements and/or adding new elements',
          methodExample: ''
        },
        {
          name: 'unshift',
          method: 'add 1 or more elements to the front of an array',
          methodExample:
            'let myArray = ["you are learning javascript"]\r myArray.unshift("Hello")\r // output: ["Hello", "you are learning JavaScript"]'
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
    }
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


