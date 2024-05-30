console.log("Hey, Iam Writing JavaScript");

function Add_card(){
    let card = document.createElement('div');
    card.innerHTML = `<div class="card">
    <div class="image">
        <img src="./my_profile_picture.jpeg" alt="">
    </div>
    <div class="capsules">
        <span>
            Artist
        </span>
        <span>
            Lo-Fi
        </span>
    </div>
    <div class="description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita obcaecati, nesciunt architecto neque sapiente, perferendis debitis eligendi hic perspiciatis itaque ut dignissimos veniam.</p>
    </div>
</div>`
    document.querySelector('.container').append(card);
    
}
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();
Add_card();



