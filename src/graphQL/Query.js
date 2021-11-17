import { gql } from '@apollo/client'

export const GetAllPassanger = gql`
    query getAllPassanger {
        passanger {
        id
        jk
        nama
        umur
        }
    }
`

export const SearchById = gql`
    query searchById($id: Int) {
        passanger(where: {id: {_eq: $id}}) {
        id
        jk
        nama
        umur
        }
    }
  `