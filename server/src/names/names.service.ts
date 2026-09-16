import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateNameDto } from "./dto/create-name.dto";
import { UpdateNameDto } from "./dto/update-name.dto";



@Injectable()
export class NamesService {
   private Nameshaped:CreateNameDto[]=[];
private updatedata={}
  create(createNameDto: CreateNameDto) {
    return this.Nameshaped.push(createNameDto)
  }

  findAll() {
    return this.Nameshaped;
  }

  findOne(id: number) {
    return this.Nameshaped.filter((curr)=>curr.id==id);
  }

  update(id: number, updateNameDto: UpdateNameDto) {
this.Nameshaped=this.Nameshaped.filter((curr)=>{
  if(curr.id!==id){
    return curr
  }else{
    return updateNameDto
  }
})
  }

  remove(id: number) {
   this.Nameshaped=this.Nameshaped.filter((curr)=>curr.id!==id)
   return `${id} was deleted`
  }
  
}
