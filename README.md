# ⚡ SAVE LAB
### GAME SAVE TOOLKIT · GIẢI MÃ · PHÂN TÍCH · CHỈNH SỬA

<p align="center">
  <b>Chào mừng đến với SAVE LAB!</b>
  <br>
  Bộ công cụ trực tuyến dành cho việc giải mã, phân tích, chỉnh sửa dữ liệu game và xử lý mã nguồn.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SAVE%20LAB-GAME%20TOOLKIT-8B5CF6?style=for-the-badge" />
  <img src="https://img.shields.io/badge/PLATFORM-WEB-06B6D4?style=for-the-badge" />
  <img src="https://img.shields.io/badge/TOOLS-05-F59E0B?style=for-the-badge" />
  <img src="https://img.shields.io/badge/STATUS-ACTIVE-22C55E?style=for-the-badge" />
</p>

---

## 🌌 1. Giới thiệu

**SAVE LAB** là dự án tập hợp các công cụ trực tuyến được xây dựng chủ yếu dưới dạng HTML, hướng đến việc hỗ trợ người dùng làm việc với dữ liệu lưu game, phân tích cấu trúc tệp và xử lý mã nguồn.

Dự án được xây dựng với mục tiêu tập trung nhiều tiện ích khác nhau vào một nền tảng duy nhất, giúp người dùng không cần phải tìm kiếm và sử dụng quá nhiều phần mềm riêng biệt.

Từ việc giải mã save file, kiểm tra dữ liệu RPG Maker, phân tích cấu trúc Ruby Marshal cho đến làm rối mã JavaScript, SAVE LAB hướng đến việc tạo ra một không gian làm việc thuận tiện, trực quan và dễ tiếp cận.

### 🎯 Mục tiêu dự án

- Tập hợp các công cụ xử lý dữ liệu game trên cùng một nền tảng.
- Hỗ trợ nhiều định dạng save file và cấu trúc dữ liệu.
- Đơn giản hóa quá trình giải mã, kiểm tra và chỉnh sửa dữ liệu.
- Cung cấp tiện ích xử lý mã nguồn ngay trên trình duyệt.
- Tối ưu trải nghiệm trên cả máy tính và thiết bị di động.
- Liên tục phát triển và bổ sung những công cụ mới.

---

## 🧰 2. Danh sách công cụ

SAVE LAB hiện có 5 công cụ thuộc các nhóm chức năng khác nhau.

| STT | Công cụ | Chức năng chính | Trạng thái |
|:---:|---|---|:---:|
| 01 | NSON / ES3 Decrypter | Giải mã và phân tích dữ liệu NSON / Easy Save 3 | 🟢 |
| 02 | RMMZ Decrypter | Xử lý save file RPG Maker MZ | 🟢 |
| 03 | RPG Maker Save Editor | Phân tích và chỉnh sửa save RPG Maker MV | 🟢 |
| 04 | Ruby Marshal Inspector | Kiểm tra cấu trúc dữ liệu Ruby Marshal | 🟢 |
| 05 | OBF – Code Obfuscator | Làm rối và biến đổi mã nguồn | 🟢 |

### 01. NSON / ES3 Decrypter

Công cụ hỗ trợ làm việc với dữ liệu được tạo bởi NSON và Easy Save 3.

Các chức năng chính:
- Giải mã dữ liệu thuộc định dạng được hỗ trợ.
- Phân tích cấu trúc dữ liệu.
- Kiểm tra các giá trị được lưu trữ.
- Hỗ trợ chỉnh sửa dữ liệu theo khả năng của công cụ.

### 02. RMMZ Decrypter

Công cụ dành cho các tệp lưu trữ của RPG Maker MZ.

Các chức năng chính:
- Đọc và xử lý save file RPG Maker MZ.
- Giải mã dữ liệu theo định dạng được hỗ trợ.
- Phân tích nội dung save.
- Hỗ trợ thao tác với dữ liệu lưu game.

### 03. RPG Maker Save Editor

Công cụ hỗ trợ làm việc với save file RPG Maker MV.

Định hướng chức năng:
- Tiếp nhận tệp `.rpgsave`.
- Phân tích dữ liệu save.
- Hỗ trợ truy cập và chỉnh sửa những trường dữ liệu được công cụ nhận diện.
- Xuất dữ liệu sau khi xử lý.

### 04. Ruby Marshal Inspector

Công cụ dành cho việc kiểm tra và phân tích dữ liệu sử dụng cấu trúc Ruby Marshal.

Các định dạng mục tiêu:
- `.rxdata` – RPG Maker XP.
- `.rvdata` – RPG Maker VX.
- `.rvdata2` – RPG Maker VX Ace.

Các chức năng:
- Nhận diện cấu trúc Ruby Marshal.
- Kiểm tra token và dữ liệu nhị phân HEX.
- Hỗ trợ khảo sát cấu trúc save file.
- Làm cơ sở cho việc phát triển các chức năng phân tích sâu hơn.

*Lưu ý: Công cụ hiện tập trung vào kiểm tra cấu trúc và dữ liệu, không đồng nghĩa với việc đã hỗ trợ giải mã và chỉnh sửa hoàn chỉnh mọi save file RGSS.*

### 05. OBF – Code Obfuscator

Công cụ hỗ trợ làm rối mã nguồn, giúp biến đổi cách biểu diễn mã nhằm khiến việc đọc hiểu trực tiếp trở nên khó khăn hơn.

Các chức năng hướng đến:
- Xử lý mã nguồn JavaScript.
- Làm rối mã nguồn bằng các kỹ thuật obfuscation được hỗ trợ.
- Hỗ trợ xử lý mã nguồn đầu vào và xuất kết quả.
- Phục vụ việc bảo vệ và làm khó quá trình đọc mã nguồn trực tiếp.

*Obfuscation không phải phương pháp mã hóa bảo mật tuyệt đối và không thể đảm bảo mã nguồn không bị phân tích ngược.*

---

## ✨ 3. Tính năng nổi bật

### 🎨 Giao diện

- Dark Mode theo phong cách Cyberpunk / Gaming.
- Thiết kế giao diện thống nhất giữa các công cụ.
- Banner và hình ảnh riêng cho từng tiện ích.
- Bố cục trực quan, dễ sử dụng.
- Hiệu ứng chuyển động được tiết chế.
- Tập trung vào khả năng sử dụng thay vì hiệu ứng trang trí quá mức.

### 📱 Khả năng tương thích

- Hỗ trợ máy tính và laptop.
- Tương thích với tablet.
- Giao diện Responsive cho điện thoại.
- Các thành phần điều khiển phù hợp với màn hình cảm ứng.
- Tối ưu hiệu năng và hạn chế animation không cần thiết.

### ⚙️ Kiến trúc công cụ

- Mỗi công cụ được triển khai trên một trang HTML riêng.
- Các công cụ hoạt động độc lập về giao diện và chức năng.
- Dễ dàng bổ sung hoặc cập nhật tiện ích.
- Không yêu cầu cài đặt ứng dụng riêng để sử dụng giao diện web.
- Có thể truy cập thông qua trình duyệt tương thích.

---

## 🚀 4. Hướng dẫn sử dụng

### Bước 1 – Truy cập

Mở trang chủ SAVE LAB thông qua GitHub Pages hoặc chạy dự án trực tiếp trên thiết bị.

### Bước 2 – Chọn công cụ

Lựa chọn công cụ phù hợp với định dạng dữ liệu hoặc mục đích sử dụng.

### Bước 3 – Nhập dữ liệu

Tải tệp save hoặc nhập mã nguồn vào khu vực làm việc của công cụ.

### Bước 4 – Xử lý

Thực hiện các thao tác được cung cấp trên giao diện.

### Bước 5 – Xuất kết quả

Kiểm tra kết quả và tải dữ liệu sau khi hoàn tất.

> **Lưu ý:** Luôn giữ lại bản sao của tệp gốc trước khi thực hiện các thao tác chỉnh sửa. Đối với công cụ xử lý mã nguồn, hãy kiểm tra kết quả trước khi đưa vào sử dụng.

---

## 📁 5. Cấu trúc dự án

```text
SAVE-LAB/
│
├── index.html
│
├── Save_Tool_NSON_ES3.html
├── savelab_rmmz.html
├── tool3.html
├── tool4.html
├── tool5.html
│
├── terms-of-service.html
├── privacy-policy.html
│
└── README.md
```

| Tệp | Mô tả |
|---|---|
| `index.html` | Trang chủ và danh sách công cụ |
| `Save_Tool_NSON_ES3.html` | NSON / ES3 Decrypter |
| `savelab_rmmz.html` | RMMZ Decrypter |
| `tool3.html` | RPG Maker Save Editor |
| `tool4.html` | Ruby Marshal Inspector |
| `tool5.html` | OBF – Code Obfuscator |
| `tos.html` | Điều khoản sử dụng |
| `privacy.html` | Chính sách quyền riêng tư |
| `README.md` | Tài liệu dự án |

---

## 🔒 6. Quyền riêng tư và bảo mật

SAVE LAB hướng đến việc xử lý dữ liệu một cách minh bạch và an toàn.

Các nguyên tắc của dự án:

- Không chia sẻ dữ liệu người dùng khi chưa được cho phép.
- Hạn chế thu thập thông tin không cần thiết.
- Không sử dụng dữ liệu cá nhân ngoài mục đích cần thiết.
- Khuyến khích xử lý dữ liệu trực tiếp trên trình duyệt khi công cụ hỗ trợ.
- Người dùng cần kiểm tra cách thức xử lý dữ liệu của từng công cụ.

Không nên mặc định rằng tất cả công cụ đều hoạt động hoàn toàn offline. Cách xử lý dữ liệu có thể phụ thuộc vào từng tiện ích và thư viện được sử dụng.

Tìm hiểu thêm:
- [Chính sách quyền riêng tư](privacy-policy.html)
- [Điều khoản sử dụng](terms-of-service.html)

---

## ⚠️ 7. Tuyên bố miễn trừ trách nhiệm

SAVE LAB là một dự án độc lập, không trực thuộc, không được bảo trợ hoặc liên kết chính thức với các nhà phát triển game hay nhà phát hành được đề cập.

Người dùng chịu trách nhiệm đối với các thao tác được thực hiện bằng công cụ.

- Chỉ xử lý các tệp mà bạn sở hữu hoặc được phép sử dụng.
- Không sử dụng công cụ để xâm phạm quyền riêng tư hoặc quyền sở hữu trí tuệ.
- Không đảm bảo mọi định dạng và phiên bản game đều tương thích.
- Việc chỉnh sửa dữ liệu có thể gây lỗi hoặc làm hỏng save file.
- Kết quả xử lý phụ thuộc vào cấu trúc dữ liệu và phiên bản của từng trò chơi.
- Obfuscation không đảm bảo mã nguồn không thể bị khôi phục hoặc phân tích.
- Dự án không chịu trách nhiệm đối với mất mát dữ liệu do người dùng không sao lưu trước khi chỉnh sửa.

---

## 🛣️ 8. Lộ trình phát triển

| Hạng mục | Trạng thái |
|---|:---:|
| Xây dựng giao diện trang chủ | ✅ Hoàn thành |
| Điều khoản sử dụng | ✅ Hoàn thành |
| Chính sách quyền riêng tư | ✅ Hoàn thành |
| Bổ sung công cụ mới | ⏳ Dự kiến |
| Tối ưu trải nghiệm Mobile | 🔄 Tiếp tục |
| Cải thiện hiệu năng | 🔄 Tiếp tục |
| Mở rộng khả năng xử lý định dạng | 🔄 Tiếp tục |

---

## 🤝 9. Đóng góp và phản hồi

SAVE LAB vẫn đang trong quá trình phát triển. Mọi ý kiến đóng góp và đề xuất đều được hoan nghênh.

Nếu phát hiện lỗi hoặc muốn đề xuất tính năng mới:

1. Truy cập mục **Issues** trên GitHub.
2. Tạo một Issue mới.
3. Mô tả lỗi hoặc tính năng mong muốn.
4. Cung cấp thông tin về trình duyệt, thiết bị và phiên bản công cụ.
5. Đính kèm hình ảnh hoặc ví dụ nếu cần thiết.

Repository:

https://github.com/MinhTruk/test

---

## 📜 10. Bản quyền

Mã nguồn, giao diện và tài nguyên trong SAVE LAB thuộc phạm vi bản quyền của các chủ sở hữu tương ứng.

Việc sao chép, chỉnh sửa hoặc phân phối lại cần tuân thủ giấy phép của repository và quyền của các chủ sở hữu tài nguyên bên thứ ba.

Các nhãn hiệu, tên trò chơi và công nghệ được đề cập thuộc quyền sở hữu của chủ sở hữu tương ứng.

---

<p align="center">

# ⚡ SAVE LAB

**KHÁM PHÁ DỮ LIỆU. GIẢI MÃ GIỚI HẠN. LÀM CHỦ CÔNG CỤ.**

Một không gian dành cho những người thích khám phá cách dữ liệu vận hành.

`EXPLORE. DECODE. INSPECT. MODIFY.`

</p>
