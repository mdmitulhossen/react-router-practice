const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "+1 (123) 456-7890",
      address: "123 Main Street, Cityville, CA 12345",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "+1 (234) 567-8901",
      address: "456 Elm Street, Townsville, NY 67890",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      phone: "+1 (345) 678-9012",
      address: "789 Oak Avenue, Villageland, TX 23456",
    },
    // Add more contacts as needed
  ];

export  function rootLoader({request}){
        console.log(request)
        const url = new URL(request.url)
        const q = url.searchParams.get('q')
        console.log(parseInt(q))
       const searchData = data.filter((item)=>item.id === parseInt(q))
      return {data,searchData};
      
}
export  function newAction(){
    const newData =  [...data,{
        id: 4,
        firstName: "Mitul",
        lastName: "Smith",
        email: "jane.smith@example.com",
        phone: "+1 (234) 567-8901",
        address: "456 Elm Street, Townsville, NY 67890",
      }]

    
      console.log(newData)
      return newData
}