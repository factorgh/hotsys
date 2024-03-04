import supabase ,{supabaseUrl}from "./supabase-connect"

export async function getCabins (){
let { data, error } = await supabase
.from('cabins')
.select('*')

if (error){
    console.error()
    throw new Error("cannot get all cabins")
}
return data;
}


export async function deleteCabin (id){
const { error } = await supabase
.from('cabins')
.delete()
.eq('id', id)

if (error){
    console.error(error)
    throw new Error("Cannot delete cabin")
}
return data;
}

export async function CreateCabinForm(newcabin){
const { data, error } = await supabase
.from('cabins')
.insert([newcabin])
.select()

if (error){
    console.error(error)
    throw new Error("Cannot create cabin")
}
return data;
}


export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
//https://afljocnisjkmjgnqhrue.supabase.co/storage/v1/object/public/cabins/cabin-005.jpg
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "");
    
    const imagePath = hasImagePath ?
        newCabin.image :
        `${supabaseUrl}/storage/v1/object/public/cabins/${imageName}`;



//1a)Create cabin
    let query = supabase.from('cabins')
 
        if(!id)query = query.insert([
            { ...newCabin, image: imagePath },
        ])
   
    //1b).update the cabin
            
    if (id)
    query = query.update({ ...newCabin,image:imagePath })
  .eq("id", id)
  
    const{data,error} = await query.select().single();
    if (error) {
        throw new Error("There was an error updating the cabin");
        }
    if (hasImagePath) return data;

//2)upload image
   const { error: StorageError } = await supabase.storage
        .from('cabins')
        .upload(imageName, newCabin.image,);
    

    ///3)if there was an error  uploading 

           
    if (StorageError) {
        await supabase.delete()
        .eq('id', data.id);
    
    }
    return data;  
}


export function EditCabin() {
    
}
