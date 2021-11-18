import { gql } from '@apollo/client'

export const DeletePassenger = gql`
    mutation deletePassenger($id: Int = 10) {
        delete_Passenger(where: {id: {_eq: $id}}) {
        affected_rows
        }
    }
`

export const InsertPassenger = gql`
    mutation insertPassenger($object: Passenger_insert_input!) {
        insert_Passenger_one(object: $object) {
        id
        jk
        nama
        umur
        }
}`

export const EditPassenger = gql`
mutation editPassenger($id: Int!, $jk: String, $nama: String, $umur: Int) {
    update_Passenger(where: {id: {_eq: $id}}, _set: {jk: $jk, nama: $nama, umur: $umur}) {
      returning {
        id
        jk
        nama
        umur
      }
    }
  }`

