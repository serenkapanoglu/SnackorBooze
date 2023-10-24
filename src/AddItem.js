import React, {useState} from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

function AddItem(){

    const [formData, setFormData] = useState({
        name:"",
        description:"",
        recipe:"",
        serve:"",
        type:"snack",
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("YOUR_SERVER_API_ENDPOINT", formData);
            console.log("Item added:", response.data);

            setFormData({
                name:"",
                description:"",
                recipe:"",
                serve:"",
                type:"snack",
            });

         
        }catch(err){
            console.error("Error adding item:", err);
        }

    };




    return (
        <div>
        <h2>Add {formData.type === "drink" ? "Drink" : "Snack"}</h2>
        <Form onSubmit={handleFormSubmit}>
        <FormGroup>
        <Label for="name">Name</Label>
        <Input
        type="text"
        id="name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name:e.target.value})}
        />
        </FormGroup>
        
        <FormGroup>
            <Label for="description">Description</Label>
            <Input
            type="text"
            id="description"
            value={formData.description}
            onChange = {(e) => setFormData({...formData, description:e.target.value})} />
        </FormGroup>
        <FormGroup>
        <Label for="recipe">Recipe</Label>
        <Input
        type="text"
        id="recipe"
        value={formData.recipe}
        onChange={(e) => setFormData({...formData, recipe:e.target.value})}
        />
        </FormGroup>

        <FormGroup>
        <Label for="serve">Serve</Label>
        <Input
        type="text"
        id="serve"
        value={formData.serve}
        onChange={(e) => setFormData({...formData, serve:e.target.value})}
        />
        </FormGroup>

       {/* <FormGroup>
            <Label for="type">Type</Label>
            <Input
            type="type"
            value={formData.type}
            onChange={(e) => setFormData({...formData, type:e.target.value})}
            >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
    </Input> 
    
        </FormGroup>*/}

        <label for="item">Food or Drink?</label>
        <select onChange={(e) => setFormData({...formData, item:e.target.value})} id="item" name="item">
            <option value="food">Food</option>
            <option value="drink">Drink</option>
        </select>

<FormGroup>
<Button type="submit" color="primary">
    Add {formData.item==="drink" ? "Drink" : "Snack"}

</Button>
</FormGroup>
        </Form>
        </div>
    )






}


export default AddItem;