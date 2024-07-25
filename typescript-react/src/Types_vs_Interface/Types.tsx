import { read } from "fs";
import { type } from "os";
import React from "react";

function Types() {
  // One of the major difference is to cretae a single value in interface you have to create obj.
  type name = string;
  let userName: name = "hemanth";

  interface Obj {
    name: string | null;
  }

  //   let userName:Obj={
  //     name:"hello"
  //   }

  type Employee = {
    empId: string;
    name: string;
    age: number;
  };

  //Inheriting the properties of Employee
  type EmployeeDetails = Employee & {
    phno: string;
    address: string;
  };

  //This Employee Details contins attributes of Employee details except age
  type EmployeeDetails_1 = Omit<Employee, "age">;

  const emp: EmployeeDetails = {
    empId: "E12345",
    name: "John Doe",
    age: 30,
    phno: "123-456-7890",
    address: "123 Main St, Anytown, USA",
  };

  const object = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  type products = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  type readOnlyEmployee = {
    readonly empId: string;
    name: string;
    readonly dob: string;
  };

  let readOnlyValues: readOnlyEmployee = {
    empId: "123456789",
    name: "David",
    dob: "1007/02/11",
  };
  readOnlyValues.name = "Gucchi";
  //   readOnlyValues.empId=''  If I try to Update the values which has the property of readonly it will throw error
  console.log(readOnlyValues.name);

  interface interface_1 {
    name: string;
    age: number;
  }
  interface interface_1 {
    // name: string; If u are having same key value then they also gets merged
    phno: string;
  }

  //In interface there is a term called open basically if u decalre two interface of same name then the properties inside them gets merged into one
  //But in types u cannot have same identifiers. If u want to have properties of one type inside another u can use extend / inherit them
  let merged: interface_1 = {
    name: "he",
    age: 12,
    phno: "1234567890",
  };

  type omitOnInterface = Omit<interface_1, "phno">;

  let sampleObj:omitOnInterface={
    name:"x",
    age:23
  }

  return <div>Types</div>;
}

export default Types;
