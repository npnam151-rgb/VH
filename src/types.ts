export type ItemType = 'text';

export interface ChecklistItemDef {
  id: number;
  title: string;
  category: string;
  placeholder: string;
  example: string;
}

export interface ReportItem {
  id: number;
  value: string;
}

export interface ReportData {
  location: string;
  date: string;
  reporter: string;
  items: ReportItem[];
}

export const CHECKLIST_ITEMS: ChecklistItemDef[] = [
  // NHÂN SỰ
  { id: 1, category: 'NHÂN SỰ', title: 'Nhân viên mới', placeholder: 'Ghi số lượng và tên NV, vị trí', example: 'SL: 2. Phương CS PT, Hồng boy FT' },
  { id: 2, category: 'NHÂN SỰ', title: 'Nhân viên nghỉ việc (đột xuất/nghỉ hẳn/cho nghỉ)', placeholder: 'Ghi rõ tên người và lý do', example: 'Hồng Cs nghỉ đột suất có phép từ 1/4. Hùng boy đuổi việc không lương' },
  { id: 3, category: 'NHÂN SỰ', title: 'Số lượng nhân viên làm trong ngày', placeholder: 'Ghi SL bàn và bếp', example: 'SL bàn: 10ng. SL bếp: 8ng' },
  { id: 4, category: 'NHÂN SỰ', title: 'Nhân viên vi phạm quy định', placeholder: 'Ghi tên và lỗi cụ thể', example: 'Hồng không mặc đồng phục' },
  { id: 5, category: 'NHÂN SỰ', title: 'Số lượng nv ngủ tại CH', placeholder: 'Ghi SL và tên cụ thể', example: '1ng: Nhất' },
  { id: 6, category: 'NHÂN SỰ', title: 'Đào tạo nhân viên', placeholder: 'Ghi tên và nội dung đào tạo', example: 'Đào tạo nội qui làm việc: Hồng. Đào tạo cách giới thiệu menu: Đức' },
  
  // SỬA CHỮA
  { id: 7, category: 'SỬA CHỮA', title: 'Thiết bị, hạng mục cần sửa chữa', placeholder: 'Ghi các hạng mục hỏng', example: 'Biển Bia Ơi bị cháy. Toilet nam bị hỏng nút giật nước' },
  { id: 8, category: 'SỬA CHỮA', title: 'Thiết bị đã sửa trong ngày', placeholder: 'Ghi các hạng mục đã sửa', example: 'Thông cống bếp. Màn led tầng 3' },
  
  // KINH DOANH
  { id: 9, category: 'KINH DOANH', title: 'Món ăn bán chạy trong ngày', placeholder: 'Ghi SL và tên món bán được nhiều nhất trong ngày', example: 'Má đào thanh đao: 10 suất. Gà nướng mật ong: 8 suất' },
  { id: 10, category: 'KINH DOANH', title: 'Món lên chậm nhất', placeholder: 'Ghi tên món và thời gian ra đồ', example: 'Giò heo giòn da: 30ph' },
  { id: 11, category: 'KINH DOANH', title: 'Phản hồi không tốt của KH', placeholder: 'Ghi ý kiến không hài lòng của KH', example: 'Toilet có mùi. Tính phí mang đồ vào đắt' },
  { id: 12, category: 'KINH DOANH', title: 'Số bill chênh lệch tạm tính và thanh toán', placeholder: 'Ghi số lượng và nguyên nhân', example: '2 bill. Do Cs ko check kỹ đồ' },
  { id: 13, category: 'KINH DOANH', title: 'CTKM áp dụng trong ngày', placeholder: 'Ghi tên CTKM', example: 'Đặt bàn off 5%. Ngày hội Bia Ơi' },
  { id: 14, category: 'KINH DOANH', title: 'Phát sinh bất thường trong ngày', placeholder: 'Ghi các bất thường trong ngày', example: 'Công an đến thu biển. KH say ngã ở toilet... Đông khách đột biến nên thiếu nhân sự bếp nên đồ ra lâu' },
  { id: 15, category: 'KINH DOANH', title: 'Đề xuất', placeholder: 'Nêu ý kiến cải tiến, đề xuất, hiện trạng', example: 'Bổ sung thêm 8 ghế và 5 bàn' },
];

