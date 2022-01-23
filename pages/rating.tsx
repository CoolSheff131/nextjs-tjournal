import React from 'react'

import { MainLayout } from '../layouts/MainLayout'
import { FollowButton } from '../components/FollowButton'
import { Paper, Tab, Table, TableBody, TableCell, TableHead, TableRow, Tabs, Typography } from '@material-ui/core'

interface RatingPageProps {
    users: ResponseUser[]
}

const Rating: NextPage<RatingPageProps> = ({ users }) => {
    return (
        <MainLayout>
            <Paper className="pl-20 pt-20 pr-20 mb-20" elevation={0}>
                <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 6 }}>
                    Рейтинг сообществ и блогов
                </Typography>
                <Typography style={{ fontSize: 15 }}>
                    Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
                    рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
                </Typography>
                <Tabs className="mt-10" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Август" />
                    <Tab label="За 3 месяца" />
                    <Tab label="За все время" />
                </Tabs>
            </Paper>

            <Paper elevation={0}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Имя пользователя</TableCell>
                            <TableCell align="right">Рейтинг</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            users.map(obj => <TableRow key={obj.id}>
                                <TableCell component="th" scope="row">
                                    <span className="mr-15">{obj.id}</span> {obj.fullname}
                                </TableCell>
                                <TableCell align="right">{obj.commentsCount}</TableCell>
                                <TableCell align="right">
                                    <FollowButton />
                                </TableCell>
                            </TableRow>)
                        }
                    </TableBody>
                </Table>
            </Paper>
        </MainLayout>
    )
}


export const getServerSideProps = async () => {
    try {
        const users = await Api().user.getAll()
        return {
            props: {
                users
            }
        }
    } catch (error) {
        console.log(error);

    }
    return { props: { users: null } }
}

export default Rating