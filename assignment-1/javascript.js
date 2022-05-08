(()=>{
    const naya=document.querySelector("body");
    const h1=document.createElement("header");
    h1.classList.add("h1");
    h1.classList.add("text-center");
    h1.classList.add("border-secondry");
    h1.style.backgroundColor="blue";
    h1.style.marginTop="60px"
    h1.style.marginBottom="20px";
    naya.classList.add("bg-dark");
  
    const newNode=document.createTextNode("Table");
     h1.append(newNode);//Header I have created
    naya.append(h1);//I have appended it to body
    const div=document.createElement('div');
    naya.append(div);
  const table=document.createElement("table");//Here I have created table 
  div.append(table);
  div.classList.add('col-6')
  div.style.marginLeft="350px";
  const row=document.createElement("tr");
  table.classList.add("table");
  table.classList.add("table-bordered");
  table.classList.add("border-primary");
  table.style.backgroundColor="#20b0b0";
  //Here is the first row
  table.append(row);
  //Here is the heads
  const head1=document.createElement("th");
  const head2=document.createElement("th");
  const head3=document.createElement("th");
  const head4=document.createElement("th");
  const head5=document.createElement("th");
  
  
  // Here is the text 
  const headNode=document.createTextNode("Name");
  const headNode1=document.createTextNode("Age");
  const headNode2=document.createTextNode("DOB");
  const headNode3=document.createTextNode("Email");
  const headNode4=document.createTextNode("Company");
   
  //append
  head1.append(headNode);
  head2.append(headNode1);
  head3.append(headNode2);
  head4.append(headNode3);
  head5.append(headNode4);
  
  
  // here we append head to row
  
  row.append(head1);
  row.append(head2);
  row.append(head3);
  row.append(head4);
  row.append(head5);
  row.style.backgroundColor="#f5b942";
  
  
  const row2=document.createElement("tr");
  //Here is the second row
  table.append(row2);
  //Here is the data
  const data1=document.createElement("td");
  const data2=document.createElement("td");
  const data3=document.createElement("td");
  const data4=document.createElement("td");
  const data5=document.createElement("td");
  
  
  // Here is the text 
  const dataNode=document.createTextNode("Unnati");
  const dataNode1=document.createTextNode("21");
  const dataNode2=document.createTextNode("13/07/2000");
  const dataNode3=document.createTextNode("abc@gmail.com");
  const dataNode4=document.createTextNode("Gemini");
   
  //append
  data1.append(dataNode);
  data2.append(dataNode1);
  data3.append(dataNode2);
  data4.append(dataNode3);
  data5.append(dataNode4);
  
  // here we append data to row
  
  row2.append(data1);
  row2.append(data2);
  row2.append(data3);
  row2.append(data4);
  row2.append(data5);
  
  
  const row3=document.createElement("tr");
  //Here is the third row
  table.append(row3);
  //Here is the heads
  const data6=document.createElement("td");
  const data7=document.createElement("td");
  const data8=document.createElement("td");
  const data9=document.createElement("td");
  const data10=document.createElement("td");
  
  
  // Here is the text 
  const dataNode5=document.createTextNode("Jyoti");
  const dataNode6=document.createTextNode("21");
  const dataNode7=document.createTextNode("12/03/2001");
  const dataNode8=document.createTextNode("abc@gmail.com");
  const dataNode9=document.createTextNode("Gemini");
   
  //append
  data6.append(dataNode5);
  data7.append(dataNode6);
  data8.append(dataNode7);
  data9.append(dataNode8);
  data10.append(dataNode9);
  // here we append head to row
  
  row3.append(data6);
  row3.append(data7);
  row3.append(data8);
  row3.append(data9);
  row3.append(data10);
  
  
  
  
  const row4=document.createElement("tr");
  //Here is the fourth row
  table.append(row4);
  //Here is the heads
  const data11=document.createElement("td");
  const data12=document.createElement("td");
  const data13=document.createElement("td");
  const data14=document.createElement("td");
  const data15=document.createElement("td");
  
  
  // Here is the text 
  const dataNode10=document.createTextNode("Aparna");
  const dataNode11=document.createTextNode("21");
  const dataNode12=document.createTextNode("12/03/2001");
  const dataNode13=document.createTextNode("abc@gemini.com");
   const dataNode14=document.createTextNode("Gemini");
  //append
  data11.append(dataNode10);
  data12.append(dataNode11);
  data13.append(dataNode12);
  data14.append(dataNode13);
  data15.append(dataNode14);
  
  // here we append head to row
  
  row4.append(data11);
  row4.append(data12);
  row4.append(data13);
  row4.append(data14);
  row4.append(data15);
  
  
  
  
  
  const row5=document.createElement("tr");
  //Here is the third row
  table.append(row5);
  //Here is the heads
  const data16=document.createElement("td");
  const data17=document.createElement("td");
  const data18=document.createElement("td");
  const data19=document.createElement("td");
  const data20=document.createElement("td");
  
  
  // Here is the text 
  const dataNode15=document.createTextNode("Bharat");
  const dataNode16=document.createTextNode("21");
  const dataNode17=document.createTextNode("10/04/2001");
  const dataNode18=document.createTextNode("abc@gemini.com");
  const dataNode19=document.createTextNode("Gemini");
  
  
  //append
  data16.append(dataNode15);
  data17.append(dataNode16);
  data18.append(dataNode17);
  data19.append(dataNode18);
  data20.append(dataNode19);
  
  // here we append head to row
  
  row5.append(data16);
  row5.append(data17);
  row5.append(data18);
  row5.append(data19);
  row5.append(data20);
  
  
  
  
  
  
  
  
  
  
  })();