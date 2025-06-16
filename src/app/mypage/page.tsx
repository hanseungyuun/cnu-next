import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'; // UserContext의 경로
import Header from '../components/layout/Header.tsx'; // Header 컴포넌트의 경로

// 과제 1: 마이페이지 구현
export default function MyPage() {
  // 1.1. UserContext를 활용한 Mypage 구현 (UserContext에 아이디(userId: string), 나이(age: number), 핸드폰번호(phoneNumber: string) 추가)
  const { user } = userContext;
  
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* 1.2. Header Component를 재활용하여 Mypage Header 표기 (title: 마이페이지) */}
      <p>마이페이지</p>
      {/* Mypage 정보를 UserContext 활용하여 표시 (이름, 아이디, 나이, 핸드폰번호 모두 포함) */}

      {/* 1.3. 홈으로 가기 버튼 구현(Link or Router 활용) */}
    </div>
  );
}
