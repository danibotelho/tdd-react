import { Typography } from "@mui/material"

export const BookList = ({books}) => {

    return(
        <div data-test="book-list">
        {books.map(book => (
          <div className="book-item"> 
          <Typography variant='h5' component='h5'className="titles">
            {book.name}
            </Typography> 
        </div>
        ))}
      </div>
    )
}