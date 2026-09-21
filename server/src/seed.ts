import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Name } from "./names/name.entity";
import bcrypt from "bcryptjs";
import { User } from "./User/entity/user.entity";
const saltOrRounds = 10;

async function seed() {
  const app = await NestFactory.create(AppModule);
  const userrepo = app.get(getRepositoryToken(User));
  const namerepo = app.get(getRepositoryToken(Name));
  console.log("abhishek");

  const checkuser = await userrepo.findOne({ where: { username: "examuser" } });
  if (!checkuser) {
    const hashpassowrd = await bcrypt.hash("Exam@123", saltOrRounds); //role -user , username-examuser ,password-hashpassword
    await userrepo.save({
      username: "examuser",
      passwordHash: hashpassowrd,
      role: "user",
    });
    return "user saved!";
  }

  const checkadmin = await userrepo.findOne({
    where: { username: "examadmin" },
  });
  if (!checkadmin) {
    const hashpassword = await bcrypt.hash("Admin@123", saltOrRounds);
    await userrepo.save({
      username: "examadmin",
      passwordHash: hashpassword,
      role: "admin",
    });
  }

  const existinguser = await userrepo.findOne({
    where: { username: "examuser" },
  });

  if(existinguser){
      await namerepo.save({
          name: "bit instiute",
          email: "ap@g5mail.com",
          course: "ReactJs",
          user: existinguser,
        });
        console.log("record")
    }

const data=await namerepo.find({
    relations: {
        user: true,
    },
})
console.log(data);
    await app.close()
}
seed();
