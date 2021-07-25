import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useAsyncData } from 'hooks/useAsyncData';
import { IProduct } from 'models';
import { LoadingSpinner } from 'components/LoadingSpinner';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Row } from 'reactstrap';
import { CommonPageContainer } from 'components/CommonPageContainer';

interface IParams {
    id: string;
}

export const ProductDetailsPage: React.FC = () => {
    const { id } = useParams<IParams>();
    const history = useHistory();
    const [productData] = useAsyncData<IProduct>(`/products/${id}`);

    const handleBack = React.useCallback((id: string) => {
        history.push(`/categories/${id}`);
    }, [history]);

    const handleAddToBasket = React.useCallback(() => {
        console.log('need to redux');
    }, []);

    let content;

    if (productData.loading) {
        content = <LoadingSpinner />;
    } else if (productData.error) {
        content = <h4 className="text-danger">Error occurred!</h4>;
    } else {
        const { data } = productData;
        if (!!data) {
            const { categoryId, name, imageUrl } = data;
            content = (
                <Row className="mt-4">
                    <Col xs={12}>
                        <Card>
                            <CardHeader>{name}</CardHeader>
                            <CardBody>
                                <img src={imageUrl} alt={name} style={{ height: '150px' }} />
                            </CardBody>
                            <CardFooter>
                                <Button onClick={handleAddToBasket}>Add to basket</Button>
                                <Button className="ms-3" onClick={() => handleBack(categoryId)}>Back to the category</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            )
        }
    }

    return (
        <CommonPageContainer>{content}</CommonPageContainer>
    )
}
