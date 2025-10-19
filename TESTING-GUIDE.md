# 🚀 Hướng dẫn Test CI/CD Pipeline

## 📋 Repository của bạn
**GitHub Repo:** https://github.com/web4everyone2005/CI-CDTesting

---

## ✅ Các bước đã hoàn thành

- [x] Git repository đã được khởi tạo
- [x] Remote repository đã được thêm
- [x] Tất cả tests đã pass (7/7 ✓)
- [x] Build thành công
- [x] Cấu hình base path cho GitHub Pages

---

## 🔥 Bắt đầu Test CI/CD

### Bước 1: Add và Commit tất cả files

```powershell
# Add tất cả files
git add .

# Commit với semantic message
git commit -m "feat: add DateTimeChecker with complete CI/CD pipeline"
```

### Bước 2: Đổi tên branch từ master sang main

```powershell
# Đổi tên branch
git branch -M main
```

### Bước 3: Push lên GitHub

```powershell
# Push lần đầu
git push -u origin main
```

**Lưu ý:** Bạn có thể cần đăng nhập GitHub. Nếu gặp lỗi authentication:
- Sử dụng GitHub Desktop
- Hoặc tạo Personal Access Token tại: https://github.com/settings/tokens

---

## 🎯 Điều gì sẽ xảy ra khi bạn Push?

### 1. CI Workflow sẽ tự động chạy ✨

File: `.github/workflows/ci.yml`

**Các job sẽ chạy:**
- ✅ **Lint Job**: Kiểm tra code quality với ESLint
- ✅ **Test Job**: Chạy 7 unit tests
- ✅ **Build Job**: Build ứng dụng React
- ✅ **Build Matrix Job**: Test trên nhiều OS (Ubuntu, Windows, macOS) và Node versions (18, 20, 22)

**Thời gian dự kiến:** ~3-5 phút

### 2. CD Workflow sẽ deploy ứng dụng 🚀

File: `.github/workflows/cd.yml`

**Các job sẽ chạy:**
- 🌐 **Deploy to GitHub Pages**: Deploy ứng dụng lên GitHub Pages
- 📢 **Notify**: Thông báo kết quả deployment

**URL sau khi deploy:** https://web4everyone2005.github.io/CI-CDTesting/

---

## 📊 Theo dõi CI/CD Pipeline

### Cách 1: Trên GitHub Web

1. Truy cập: https://github.com/web4everyone2005/CI-CDTesting
2. Click vào tab **Actions**
3. Xem workflow đang chạy

### Cách 2: Qua Command Line

```powershell
# Mở repository trên GitHub
start https://github.com/web4everyone2005/CI-CDTesting/actions
```

---

## 🧪 Test các kịch bản khác nhau

### Test 1: Tạo Pull Request (PR)

```powershell
# Tạo branch mới
git checkout -b feature/test-pr

# Thay đổi nhỏ (ví dụ: thêm comment)
# Edit file src/App.jsx và thêm một comment

git add .
git commit -m "test: verify PR checks"
git push origin feature/test-pr
```

**Sau đó:**
1. Vào GitHub: https://github.com/web4everyone2005/CI-CDTesting
2. Click **Pull requests** > **New pull request**
3. Chọn branch `feature/test-pr`
4. Tạo PR và xem các checks tự động chạy

**Workflow sẽ chạy:**
- `.github/workflows/pr-check.yml` - Kiểm tra PR
- `.github/workflows/ci.yml` - CI checks

### Test 2: Test Build trên nhiều nền tảng

Workflow `ci.yml` có job **build-matrix** sẽ tự động test:
- ✅ Ubuntu + Node 18, 20, 22
- ✅ Windows + Node 18, 20, 22  
- ✅ macOS + Node 18, 20, 22

Tổng cộng: **9 build combinations!**

### Test 3: Manual Deploy (Workflow Dispatch)

```powershell
# Hoặc vào GitHub Actions và click "Run workflow" manually
```

Vào: https://github.com/web4everyone2005/CI-CDTesting/actions/workflows/cd.yml

Click **Run workflow** button để deploy thủ công.

### Test 4: Scheduled Tests (Cron Job)

File `.github/workflows/cron-test.yml` sẽ:
- ⏰ Tự động chạy tests **mỗi ngày lúc 2:00 AM UTC**
- 🔒 Kiểm tra security vulnerabilities
- 📊 Tạo test reports

Để test ngay:
1. Vào: https://github.com/web4everyone2005/CI-CDTesting/actions/workflows/cron-test.yml
2. Click **Run workflow**

---

## 📱 Setup GitHub Pages

### Bước 1: Enable GitHub Pages

1. Vào repository: https://github.com/web4everyone2005/CI-CDTesting
2. Click **Settings** ⚙️
3. Scroll xuống **Pages** (menu bên trái)
4. Trong **Build and deployment**:
   - **Source**: Chọn **GitHub Actions** (thay vì Deploy from a branch)
5. Save

### Bước 2: Kiểm tra deployment

Sau khi push code, đợi ~2-3 phút, sau đó truy cập:
**https://web4everyone2005.github.io/CI-CDTesting/**

---

## 🎨 Test ứng dụng DateTimeChecker

Khi ứng dụng đã được deploy, bạn có thể test các tính năng:

1. ⏰ **Xem thời gian thực** - Cập nhật mỗi giây
2. 📅 **Chọn ngày/giờ** - Sử dụng datetime picker
3. 🧮 **Tính khoảng cách thời gian** - Xem khoảng cách giữa hiện tại và thời gian đã chọn
4. ⏪⏩ **Kiểm tra quá khứ/tương lai** - Icon và text thay đổi

---

## 🔍 Kiểm tra Workflow Status

### Xem Workflow Runs

```powershell
# Mở Actions page
start https://github.com/web4everyone2005/CI-CDTesting/actions
```

### Các chỉ báo thành công:

- ✅ **Green checkmark** - Workflow passed
- ❌ **Red X** - Workflow failed
- 🟡 **Yellow dot** - Workflow đang chạy
- ⚪ **Gray** - Workflow đang chờ

### Xem logs chi tiết:

1. Click vào workflow run
2. Click vào job muốn xem
3. Click vào step để xem logs

---

## 🐛 Troubleshooting

### Nếu CI fails:

```powershell
# Test locally trước
npm run lint
npm run test
npm run build
```

### Nếu deployment fails:

1. Kiểm tra GitHub Pages settings
2. Đảm bảo đã chọn **GitHub Actions** làm source
3. Kiểm tra workflow logs

### Nếu tests fail trên GitHub nhưng pass locally:

- Kiểm tra Node version
- Kiểm tra dependencies trong package.json
- Xem workflow logs để tìm lỗi

---

## 📊 Expected Results

### Sau khi push code:

#### 1. CI Workflow (ci.yml)
```
Jobs:
✅ lint - ~30s
✅ test - ~45s  
✅ build - ~50s
✅ build-matrix - ~2-3 mins (9 combinations)

Total: ~3-4 minutes
```

#### 2. CD Workflow (cd.yml)
```
Jobs:
✅ deploy - ~1-2 mins
✅ notify - ~10s

Total: ~2 minutes
```

#### 3. Final Result
```
✅ All workflows passed
🌐 Website live at: https://web4everyone2005.github.io/CI-CDTesting/
📊 Test reports available in Actions tab
```

---

## 🎯 Quick Commands Cheat Sheet

```powershell
# Test locally
npm run test          # Run tests
npm run lint          # Check code quality
npm run build         # Build app
npm run dev           # Run dev server

# Git operations
git status            # Check status
git add .             # Stage all files
git commit -m "msg"   # Commit changes
git push              # Push to GitHub
git checkout -b name  # Create new branch

# View on GitHub
start https://github.com/web4everyone2005/CI-CDTesting
start https://github.com/web4everyone2005/CI-CDTesting/actions
start https://web4everyone2005.github.io/CI-CDTesting/
```

---

## 📈 Next Steps

Sau khi test thành công, bạn có thể:

1. ✅ Thêm badges vào README
2. ✅ Cấu hình Codecov cho test coverage
3. ✅ Thêm more tests
4. ✅ Setup notifications (Slack, Discord, Email)
5. ✅ Integrate với Vercel/Netlify
6. ✅ Thêm E2E tests với Playwright/Cypress

---

## 🎉 Bắt đầu thôi!

Chạy các lệnh sau để push và test CI/CD:

```powershell
git add .
git commit -m "feat: add DateTimeChecker with complete CI/CD pipeline"
git branch -M main
git push -u origin main
```

Sau đó mở browser và xem magic happen! 🚀

**GitHub Actions:** https://github.com/web4everyone2005/CI-CDTesting/actions

---

**Good luck! 🍀**
