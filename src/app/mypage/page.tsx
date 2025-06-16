import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/layout/Header.tsx';

// 과제 1: 마이페이지 구현
export default function MyPage() {
    // 1.1. UserContext를 활용한 Mypage 구현 (UserContext에 아이디(userId: string), 나이(age: number), 핸드폰번호(phoneNumber: string) 추가)
    const { user } = userContext;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-50">
            {/* 1.2. Header Component를 재활용하여 Mypage Header 표기 (title: 마이페이지) */}
            <Header title="마이페이지" />
            {/* Mypage 정보를 UserContext 활용하여 표시 (이름, 아이디, 나이, 핸드폰번호 모두 포함) */}
            <main className="p-8 mt-4 bg-white rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">내 정보</h2>

                <div className="space-y-4">
                    <p className="text-lg">
                        <span className="font-semibold text-gray-600">이름: </span>
                        {user.name}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-gray-600">아이디: </span>
                        {user.userId}
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-gray-600">나이: </span>
                        {user.age}세
                    </p>
                    <p className="text-lg">
                        <span className="font-semibold text-gray-600">핸드폰번호: </span>
                        {user.phoneNumber}
                    </p>
                </div>

                {/* 1.3. 홈으로 가기 버튼 구현(Link or Router 활용) */}
                <div className="mt-8 text-center">
                    <Link to="/">
                        <button className="px-6 py-2 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-colors">
                            홈으로 가기
                        </button>
                    </Link>
                </div>
            </main>
        </div>
  );
}
