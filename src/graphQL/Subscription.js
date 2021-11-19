import { gql } from '@apollo/client'

export const SubsPassenger = gql`
    subscription subsPassenger {
        Passenger {
        id
        jk
        nama
        umur
        }
    }
`