import { Card, Result, Typography, Button } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const PaymentSuccess = () => {
    return (
        <div style={{ minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', background: '#f5f5f5' }}>
            <Card style={{ width: '100%', maxWidth: '800px' }}>
                <Result
                    icon={<CheckCircleOutlined style={{ fontSize: '64px', color: '#52c41a' }} />}
                    title={
                        <Title level={2} style={{ margin: '24px 0', textAlign: 'center' }}>
                            Thanh toán khóa học thành công!
                        </Title>
                    }
                >
                    <div style={{
                        background: '#f0f7ff',
                        padding: '24px',
                        borderRadius: '8px',
                        marginBottom: '24px'
                    }}>
                        <Paragraph style={{
                            fontSize: '16px',
                            margin: 0,
                            textAlign: 'center',
                            color: 'rgba(0, 0, 0, 0.85)'
                        }}>
                            Khóa học của bạn đã được kích hoạt. Chúng tôi đã gửi thông tin tài khoản đăng nhập vào email của bạn. Vui lòng kiểm tra email để đăng nhập và bắt đầu học ngay!
                        </Paragraph>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <Button type="primary" size="large" href="https://future-tech-franchise-v2.vercel.app/">
                            Bắt đầu học ngay
                        </Button>
                    </div>
                </Result>
            </Card>
        </div>
    );
};

export default PaymentSuccess;