document.addEventListener("DOMContentLoaded",()=>{

const exform=document.getElementById('formexpenses');
const totalAmount = document.getElementById('sum');
const filterCategory = document.getElementById('filter-category');
const tableContent = document.getElementById('table-list');


let expenses =[];
exform.addEventListener('submit',(e)=>{
e.preventDefault();

const name = document.getElementById('ex-name').value;
const amount = parseFloat(document.getElementById('ex-amount').value);
const category = document.getElementById('category').value;
const date = document.getElementById('ex-date').value;

let expense = {
    id:Date.now(),
    name,
    amount,
    category,
    date
};
expenses.push(expense);
displayExpenses(expenses);
updateTotalAmount();
exform.reset();

})
filterCategory.addEventListener("change",(e)=>{
    const category = e.target.value;
    if(category === "All"){
        displayExpenses(expenses)
    }
    else{
        const filteredCategory = expenses.filter(expenses=>expenses.category === category);
        displayExpenses(filteredCategory);
    }

});

tableContent.addEventListener('click',(e)=>{
   if(e.target.classList.contains('delete-btn')){
   const id = parseInt(e.target.dataset.id);
  expenses =expenses.filter(expense=>expense.id != id)
      displayExpenses(expenses);
      updateTotalAmount();
}
if(e.target.classList.contains('edit-btn')){
    const id = parseInt(e.target.dataset.id);
    const expense = expenses.find(expense => expense.id === id);
document.getElementById('ex-name').value = expense.name;
document.getElementById('ex-amount').value = expense.amount;
document.getElementById('category').value = expense.category;
document.getElementById('ex-date').value= expense.date;

expenses = expenses.filter(expense=>expense.id!= id);
displayExpenses(expenses);
updateTotalAmount();
}
})

function displayExpenses(expenses){
    tableContent.innerHTML = '';
    expenses.forEach(ex => {
        const row = document.createElement('tr');

        row.innerHTML = `<td>${ex.name}</td>
        <td>${ex.amount}</td>
        <td>${ex.category}</td>
        <td>${ex.date}</td>
         <td>
           <button class="edit-btn" data-id="${ex.id}"> Edit</button>
           <button class="delete-btn" data-id ="${ex.id}"> Delete</button>

        </td>`;
       
        tableContent.appendChild(row); 
    });
}
function updateTotalAmount(){
    const total = expenses.reduce((sums,expense) => sums + expense.amount,0);
    totalAmount.textContent = total;
    console.log(total);
}
});
