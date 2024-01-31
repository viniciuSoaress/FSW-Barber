'use client'

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";


export function SearchHome(){
  return(
    <div className="flex items-center gap-2">
      <Input placeholder="Busque por uma Barbearia."/>
      <Button variant='default' size='icon'>
        <SearchIcon />
      </Button>
    </div>
  )
}