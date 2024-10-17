import Image from 'next/image';
import React from 'react';

// Sample data imported or directly included here
const toolsData = {
  tools:  [
    {
      "name": "Electric Button",
      "category": "Electrical",
      "price": 499,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/45/65/51/456551733c8d5c3118402b6800f52d7a.jpg",
      "store": {
        "name": "Hardware Hub",
        "location": {
          "address": "123 MG Road",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pin": "400001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Copper Wires (100m)",
      "category": "Electrical",
      "price": 2599,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/8f/c2/71/8fc271faa6910724e79998d8c014e569.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9988776655"
      }
    },
    {
      "name": "Wall Paint (White, 10L)",
      "category": "Painting",
      "price": 1999,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/4a/e3/92/4ae392950e80c0256c64292a71f903af.jpg",
      "store": {
        "name": "Paint Store",
        "location": {
          "address": "789 Shivaji Chowk",
          "city": "Pune",
          "state": "Maharashtra",
          "pin": "411001"
        },
        "contact": "+91-9123456789"
      }
    },
    {
      "name": "Paint Brush Set (5 pieces)",
      "category": "Painting",
      "price": 350,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/8a/53/29/8a532967f5e01edfc7f38af198c83fda.jpg",
      "store": {
        "name": "Tools & Paints",
        "location": {
          "address": "12 Residency Road",
          "city": "Bangalore",
          "state": "Karnataka",
          "pin": "560001"
        },
        "contact": "+91-8765432109"
      }
    },
    {
      "name": "Screwdriver Set (10 pieces)",
      "category": "Tools",
      "price": 1499,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/73/21/ef/7321ef31b1fd477b11c975904adb5d8a.jpg",
      "store": {
        "name": "Tool Shop",
        "location": {
          "address": "34 Nehru Market",
          "city": "Chennai",
          "state": "Tamil Nadu",
          "pin": "600001"
        },
        "contact": "+91-9345678901"
      }
    },
    {
      "name": "Drill Machine (500W)",
      "category": "Tools",
      "price": 7999,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/89/0c/dc/890cdc7d795c28c447abc424f2c7fa26.jpg",
      "store": {
        "name": "Power Tools Depot",
        "location": {
          "address": "567 Anna Salai",
          "city": "Chennai",
          "state": "Tamil Nadu",
          "pin": "600002"
        },
        "contact": "+91-9456781230"
      }
    },
    {
      "name": "Insulation Tape (10m)",
      "category": "Electrical",
      "price": 50,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/1e/a4/e9/1ea4e9f70b0efef1064e356e492d5c90.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9988776655"
      }
    },
    {
      "name": "Drill Machine",
      "category": "Mechanical",
      "price": 999,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/2a/df/ca/2adfca9969b320a9ea075fc42fcf4c6e.jpg",
      "store": {
        "name": "Hardware Hub",
        "location": {
          "address": "123 MG Road",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pin": "400001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Hammer",
      "category": "Mechanical",
      "price": 299,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/68/8f/02/688f02657d14ce81420d0414f298b888.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Pliers",
      "category": "Mechanical",
      "price": 499,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/2b/59/6c/2b596cbf393f9861f47150be392c222e.jpg",
      "store": {
        "name": "Hardware Hub",
        "location": {
          "address": "123 MG Road",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pin": "400001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Screwdriver Set",
      "category": "Mechanical",
      "price": 1999,
      "currency": "INR",
      "image": "https://i.pinimg.com/236x/46/e8/3a/46e83a1d27a21eb94dc245c9ef800e3f.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Wrench",
      "category": "Mechanical",
      "price": 599,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/b1/82/c9/b182c98a5c5a2330f35a5c243af08fcc.jpg",
      "store": {
        "name": "Hardware Hub",
        "location": {
          "address": "123 MG Road",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pin": "400001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Measuring Tape",
      "category": "Mechanical",
      "price": 99,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/2f/ca/8f/2fca8f516be309ae43c2c9028c9db4ec.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Level",
      "category": "Mechanical",
      "price": 399,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/9b/5d/7b/9b5d7bf87ed39c74c774701b36da13c6.jpg",
      "store": {
        "name": "Hardware Hub",
        "location": {
          "address": "123 MG Road",
          "city": "Mumbai",
          "state": "Maharashtra",
          "pin": "400001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Wire Stripper",
      "category": "Electrical",
      "price": 299,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/af/a4/64/afa464c2f20da8b0921c0dd7123a8e41.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9876543210"
      }
    },
    {
      "name": "Voltage Tester",
      "category": "Electrical",
      "price": 399,
      "currency": "INR",
      "image": "https://i.pinimg.com/564x/27/da/b4/27dab4da7d09be2af640e18cf8e10082.jpg",
      "store": {
        "name": "Power Tools Depot",
        "location": {
          "address": "567 Anna Salai",
          "city": "Chennai",
          "state": "Tamil Nadu",
          "pin": "600002"
        },
        "contact": "+91-9456781230"
      }
    },
    {
      "name": "Wire Connector",
      "category": "Electrical",
      "price": 199,
      "currency": "INR",
      "image": "https://i.pinimg.com/736x/7a/5b/04/7a5b04856a73278f9fd93f916914fcc7.jpg",
      "store": {
        "name": "Electric Supplies",
        "location": {
          "address": "456 Gandhi Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "pin": "110001"
        },
        "contact": "+91-9876543210"
      }
    }
],
};

const  ToolsList = () => {
  return (
    <div className="w-full mx-auto p-8 ">
      <h1 className="text-4xl font-bold mb-4 flex justify-center items-center">Daily Usage Tools</h1>
      <div className="mt-11 h-auto grid grid-cols-1 md:grid-cols-4 gap-4 ">
        {toolsData.tools.map((tool, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md bg-slate-200 dark:bg-gray-900 transition duration-300 ease-in-out  hover:scale-105 hover:shadow-lg hover:bg-slate-300 dark:hover:bg-gray-800  cursor-pointer">
              <img  src={tool.image} alt={tool.name} className="  w-full h-[45vh] rounded-xl object-contain  mb-2 " />
            <h2 className="text-xl font-semibold">{tool.name}</h2>
            <p className="text-gray-700">Category: {tool.category}</p>
            <p className="text-gray-700">
              Price: {tool.price} {tool.currency}
            </p>
            <div className="mt-2">
              <h3 className="font-medium">Store Details:</h3>
              <p>{tool.store.name}</p>
              <p>{tool.store.location.address}</p>
              <p>
                {tool.store.location.city}, {tool.store.location.state} {tool.store.location.pin}
              </p>
              <p>Contact: {tool.store.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsList;
