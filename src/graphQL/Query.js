import { gql } from '@apollo/client'

export const GetAllPassenger = gql`
    query getAllPassenger {
        Passenger {
        id
        jk
        nama
        umur
        }
    }
`

export const SearchById = gql`
    query searchById($id: Int) {
        Passenger(where: {id: {_eq: $id}}) {
        id
        jk
        nama
        umur
        }
    }
  `