import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardBody, CardHeader, FormGroup, Input, Label, Button
} from "reactstrap";
import * as Yup from 'yup';
import Brand from '../../components/Brand';
import useAuth from '../../hooks/useAuth';

const CheckMail = () => {
    const [loading, setLoading] = useState(false)
    
    return (
        <main>
            <div className='mb-4 text-center'>
                <a href="/">
                    <Brand Type='h3' bold />
                </a>
            </div>
            <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                    <div className="text-center mb-3 fw-bold">
                        <big>Mail Adresini Onayla</big>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <FormGroup>
                        <Label>Gelen Kod</Label>
                        <Input placeholder="6 haneli kodu giriniz" type="text" max={6} min={6} />
                    </FormGroup>

                    <Button color="default">Onayla</Button>

                    <p className='mt-4 text-muted'>
                        Kod Gelmedi,<Button color='link'>Tekrar Gönder</Button>
                    </p>
                </CardBody>
            </Card>
        </main>
    )
}

export default React.memo(CheckMail)