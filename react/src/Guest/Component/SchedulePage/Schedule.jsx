import React, { useState, useEffect } from 'react';
import { Card, Button, Steps, Progress, Divider, Typography, message, Spin } from 'antd';
import { CalendarOutlined, UserOutlined } from '@ant-design/icons';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { GetClassesActionAsync } from '../../../Redux/ReducerAPI/ClassReducer';
import { RegisterCourseActionAsync } from "../../../Redux/ReducerAPI/RegisterCourseReducer";

import styles from './schedule.module.css';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const translateDayOfWeek = (dayOfWeekString) => {
    const dayTranslation = {
        Monday: "Thứ Hai",
        Tuesday: "Thứ Ba",
        Wednesday: "Thứ Tư",
        Thursday: "Thứ Năm",
        Friday: "Thứ Sáu",
        Saturday: "Thứ Bảy",
        Sunday: "Chủ Nhật",
    };

    return dayOfWeekString.split(", ").map(day => dayTranslation[day.trim()] || day.trim()).join(", ");
};

const timeSlots = [
    { id: 'morning', label: 'Sáng', time: '07:00 - 12:00', icon: '🌅' },
    { id: 'afternoon', label: 'Chiều', time: '13:00 - 18:00', icon: '🌤️' },
    { id: 'evening', label: 'Tối', time: '18:00 - 21:00', icon: '🌙' }
];

const Schedule = () => {
    const location = useLocation();
    const registrationData = location.state?.registrationData;
    console.log('registrationData:', registrationData);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTime, setSelectedTime] = useState("");
    const [selectedClass, setSelectedClass] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const classes = useSelector((state) => state.ClassReducer.classData);

    useEffect(() => {
        if (registrationData) {
            dispatch(GetClassesActionAsync(registrationData.course, registrationData.agency));
        } else {
            message.error('No registration data found');
        }
    }, [dispatch, registrationData]);

    const filteredClasses = classes.filter(classItem => {
        console.log('chào')
        const classDays = classItem.dayOfWeek.split(", ").map(day => translateDayOfWeek(day.trim()));
        const selectedDaysMatch = selectedDays.some(day => classDays.includes(day));

        const classStartTime = moment(classItem.slotStart, 'HH:mm:ss');
        const classEndTime = moment(classItem.slotEnd, 'HH:mm:ss');
        const selectedTimeSlot = timeSlots.find(slot => slot.id === selectedTime);
        if (!selectedTimeSlot) return false;
        const selectedStartTime = moment(selectedTimeSlot.time.split(' - ')[0], 'HH:mm');
        const selectedEndTime = moment(selectedTimeSlot.time.split(' - ')[1], 'HH:mm');

        const timeMatch = classStartTime.isBefore(selectedEndTime) && classEndTime.isAfter(selectedStartTime);

        return selectedDaysMatch && timeMatch;
    });

    const handleSubmit = async () => {
        if (selectedClass) {
            setIsLoading(true);
            const finalData = {
                studentName: registrationData.studentName,
                email: registrationData.email,
                phoneNumber: registrationData.phoneNumber,
                agencyId: registrationData.agency,
                courseId: registrationData.course,
                classId: selectedClass.id,
            };
            const response = await dispatch(RegisterCourseActionAsync(finalData));
            setIsLoading(false);
            if (response.isSuccess && response.data) {
                window.location.href = response.data;
            } else {
                message.error('Registration failed');
            }
        } else {
            message.error('Vui lòng chọn một lớp học trước khi đăng ký.');
        }
    };

    return (
        <div className={styles.scheduleContainer}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1.5rem' }}>
                <Card className={styles.scheduleCard}>
                    <Steps current={1} style={{ marginBottom: '2rem' }}>
                        <Step title="Chọn khóa học" />
                        <Step title="Chọn lịch học" />
                        <Step title="Thanh toán" />
                    </Steps>

                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <Title level={2} className={styles.scheduleTitle}>Lịch Học</Title>
                        <Text strong className={styles.scheduleSubtitle}>
                            {registrationData?.courseName}
                        </Text>
                    </div>

                    <Divider />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <Title level={4} className={styles.sectionTitle}>1. Chọn thời gian học</Title>

                            <div style={{ marginBottom: '2rem' }}>
                                <Text strong style={{ fontSize: '1rem', marginBottom: '1rem', display: 'block', color: '#4b5563' }}>
                                    Ngày học trong tuần
                                </Text>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
                                    {['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'].map((day) => (
                                        <Button
                                            key={day}
                                            type={selectedDays.includes(day) ? 'primary' : 'default'}
                                            onClick={() => setSelectedDays(prev =>
                                                prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
                                            )}
                                            className={selectedDays.includes(day) ? styles.dayButtonSelected : styles.dayButtonDefault}
                                        >
                                            {day}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginTop: '2rem' }}>
                                <Text strong style={{ fontSize: '1rem', marginBottom: '1rem', display: 'block', color: '#4b5563' }}>
                                    Thời gian học
                                </Text>
                                <div className={styles.timeSlotContainer}>
                                    {timeSlots.map(slot => (
                                        <div
                                            key={slot.id}
                                            className={selectedTime === slot.id ? styles.timeSlotSelected : styles.timeSlot}
                                            onClick={() => setSelectedTime(slot.id)}
                                        >
                                            <span className={styles.timeSlotIcon}>{slot.icon}</span>
                                            <div className={styles.timeSlotContent}>
                                                <span className={styles.timeSlotTitle}>{slot.label}</span>
                                                <span className={styles.timeSlotTime}>{slot.time}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {selectedDays.length > 0 && selectedTime && (
                            <>
                                <Divider />
                                <div>
                                    <Title level={4} className={styles.sectionTitle} style={{ marginBottom: '2rem' }}>2. Chọn lớp học phù hợp</Title>

                                    {filteredClasses.length > 0 ? (
                                        filteredClasses.map(classItem => (
                                            <div key={classItem.id} className={styles.classCard}>
                                                <div className={styles.classHeader}>
                                                    <CalendarOutlined style={{ fontSize: '24px', color: '#3b82f6' }} />
                                                    <div className={styles.classInfo}>
                                                        <div className={styles.classSchedule}>
                                                            {translateDayOfWeek(classItem.dayOfWeek)}
                                                            <span className={styles.classTimeTag}>{classItem.slotStart} - {classItem.slotEnd}</span>
                                                        </div>
                                                        <div className={styles.classDetails}>
                                                            <div className={styles.classDetail}>
                                                                <CalendarOutlined /> Bắt đầu: {moment(classItem.startDate).format('DD/MM/YYYY')}
                                                            </div>
                                                            <div className={styles.classDetail}>
                                                                <UserOutlined /> Giảng viên: {classItem.instructorName}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Button
                                                        type={selectedClass?.id === classItem.id ? 'primary' : 'default'}
                                                        onClick={() => setSelectedClass(classItem)}
                                                    >
                                                        {selectedClass?.id === classItem.id ? 'Đã chọn' : 'Chọn lớp này'}
                                                    </Button>
                                                </div>

                                                <div className={styles.progressSection}>
                                                    <div>
                                                        <div className={styles.progressTitle}>Sĩ số lớp học</div>
                                                        <Progress
                                                            percent={(classItem.currentEnrollment / classItem.capacity) * 100}
                                                            format={() => `${classItem.currentEnrollment}/${classItem.capacity}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className={styles.progressTitle}>Tiến độ khóa học</div>
                                                        <Progress
                                                            percent={(classItem.daysElapsed / classItem.totalLessons) * 100}
                                                            format={() => `${classItem.daysElapsed}/${classItem.totalLessons}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <Text>Không có lớp học nào phù hợp với lựa chọn của bạn.</Text>
                                    )}
                                </div>
                            </>
                        )}

                        {selectedClass && (
                            <>
                                <Divider />
                                <div style={{ marginBottom: '1rem' }}>
                                    <Title level={4} style={{ marginBottom: '2rem' }}>3. Xác nhận đăng ký</Title>
                                    <Card className={styles.confirmationCard}>
                                        <Paragraph>
                                            Thông tin đăng ký:
                                            <br />Tên: <Text strong>{registrationData?.studentName}</Text>
                                            <br />Số điện thoại: <Text strong>{registrationData?.phoneNumber}</Text>
                                            <br />Email: <Text strong>{registrationData?.email}</Text>
                                            <br />Khóa học: <Text strong>{registrationData?.courseName}</Text>
                                            <br />Địa chỉ trung tâm: <Text strong>{registrationData?.agencyFullAddress}</Text>
                                            <br />Lịch học: <Text strong>{`${translateDayOfWeek(selectedClass.dayOfWeek)} - ${selectedClass.slotStart} đến ${selectedClass.slotEnd}`}</Text>
                                            <br />Ngày bắt đầu: <Text strong>{moment(selectedClass.startDate).format('DD/MM/YYYY')}</Text>
                                        </Paragraph>
                                    </Card>
                                    <Spin spinning={isLoading}>
                                        <Button type="primary" size="large" onClick={handleSubmit} block className={styles.submitButton} disabled={isLoading}>
                                            Đăng ký và thanh toán
                                        </Button>
                                    </Spin>
                                </div>
                            </>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Schedule;

