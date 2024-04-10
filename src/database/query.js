export const queries = {
    getProducts: 'SELECT * FROM products',
    postProducts: 'insert into products values(@title,@price, @description, @images)',
    putProducts:'update products set title = @title, price = @price where id like @id',
    deleteProducts:'delete from products where id like @id'
}