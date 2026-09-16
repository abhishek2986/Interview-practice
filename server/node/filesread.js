const fs=require("fs");

const data=[
    {
        name:"abhishek",
        age:"23",
        role:"developer"
    },
    {
        name:"abhi",
        age:"12",
        role:"sales"
    },
    {
        name:"nayan",
        age:"45",
        role:"designing"
    }
]


fs.writeFileSync("notesa.json",JSON.stringify(data),(error)=>{
    if(error) throw error;
    console.log("saved");
})

async function readfile() {
  try {
    const contents = await fs.promises.readFile("./notes.json", { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

readfile();