import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Trang Chủ</Link>
        </li>
        <li>
          <Link href="/about">Giới Thiệu</Link>
        </li>
        <li>
          <Link href="/services">Dịch Vụ</Link>
        </li>
        <li>
          <Link href="/projects">Dự Án</Link>
        </li>
        <li>
          <Link href="/news">Tin Tức</Link>
        </li>
        <li>
          <Link href="/consult">Tư Vấn Pháp Lý</Link>
        </li>
        <li>
          <Link href="/japanese">Góc Người Nhật</Link>
        </li>
        <li>
          <Link href="/contact">Liên Hệ</Link>
        </li>
      </ul>
      <style jsx>{`
        nav ul {
          display: flex;
          list-style: none;
          background: #333;
          padding: 10px;
        }
        nav ul li {
          margin-right: 15px;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
