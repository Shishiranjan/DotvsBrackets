const ShishiranjanArray = ['Shishiranjan', 
                           'Thakur', 
                           2021-1997,
                           'SOftware developer'
                           , ['Randhir', 'Suraj', 'Golu']];

//The big difference between objects and arrays is that in objects order of these values doesnot matter at all when we want to retrieve them.
//But in arrays the order of elements in which we specify matters the most. It means that object is basically used when the data is unstructured.


const Shishiranjan = {
    firstName: 'Shihsiranjan',
    lastName: 'Thakur',
    Age: '2021-1997',
    Job: 'Software developer',
    friendss: ['Randhir', 'Suraj', 'Golu']
};

console.log(Shishiranjan);

//As we know here that the property of firstName is Shishiranjan, lastName is Thakur and so on.
//So to extract these properties of different objects we can use either dot notation or bracket notation.
//1st case: Using dot notation

console.log(Shishiranjan.firstName);
//2nd case: Using bracket notation

console.log(Shishiranjan[firstName]);
//But in the case whenever u dont know that which property i want to extract meaning i want the user to enter the property manually randomly. Then in that case we use prompt function and bracket notation.Dot notation doesnot works in this case.

const interestedIn = prompt('What do you want to know about me');

if(jonas[interestedIn])
    {
        console.log(Shsishiranjan[interestedIn]);

        
    }
else{
    console.log("Wrong request, Try Agan!")
}

//TO add new properties to the object.
Shishiranjan.location = 'Jaleshwar';
Shishiranjan[twitter] = '@Shishiranjan';
console.log[Shishiranjan];

