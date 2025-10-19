# 📅 DateTimeChecker - CI/CD Pipeline

Dự án React với CI/CD pipeline hoàn chỉnh cho ứng dụng DateTimeChecker.

## 🚀 Tính năng

- ⏰ Hiển thị thời gian thực
- 📊 Tính toán khoảng cách thời gian
- 🎨 Giao diện đẹp và responsive
- ✅ Test coverage hoàn chỉnh
- 🔄 CI/CD tự động

## 📁 Cấu trúc CI/CD

### Workflows

#### 1. **CI Pipeline** (`.github/workflows/ci.yml`)
Chạy khi có push hoặc pull request vào `main` hoặc `develop`:
- ✅ **Lint**: Kiểm tra code quality với ESLint
- 🧪 **Test**: Chạy unit tests với Vitest
- 🏗️ **Build**: Build ứng dụng
- 🔀 **Matrix Build**: Test trên nhiều OS và Node versions

#### 2. **CD Pipeline** (`.github/workflows/cd.yml`)
Tự động deploy khi push vào `main`:
- 🌐 Deploy lên **GitHub Pages**
- 🚀 Deploy lên **Vercel** (optional)
- 📢 Thông báo deployment status

#### 3. **PR Check** (`.github/workflows/pr-check.yml`)
Kiểm tra Pull Request:
- 📝 Validate PR title (semantic)
- 🔍 Code quality check
- 💬 Comment trên PR với kết quả

#### 4. **Scheduled Tests** (`.github/workflows/cron-test.yml`)
Chạy tests tự động mỗi ngày:
- 🕐 Chạy vào 2:00 AM UTC
- 🔒 Security audit
- 📊 Generate test reports

## 🛠️ Setup Instructions

### 1. Cài đặt Dependencies

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

### 3. Chạy Tests

```bash
# Chạy tests một lần
npm run test

# Chạy tests với watch mode
npm run test:watch

# Xem test coverage
npm run test:coverage

# Mở Test UI
npm run test:ui
```

### 4. Build

```bash
npm run build
```

### 5. Lint

```bash
npm run lint
```

## 🔧 Cấu hình GitHub Actions

### Bước 1: Enable GitHub Actions

1. Vào repository settings
2. Chọn **Actions** > **General**
3. Enable **Allow all actions and reusable workflows**

### Bước 2: Setup GitHub Pages (Optional)

1. Vào **Settings** > **Pages**
2. Source: **GitHub Actions**
3. Save

### Bước 3: Setup Vercel (Optional)

1. Tạo Vercel account
2. Tạo **VERCEL_TOKEN** trong Vercel settings
3. Thêm secrets vào GitHub repository:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

### Bước 4: Push Code

```bash
git add .
git commit -m "feat: add DateTimeChecker with CI/CD"
git push origin main
```

## 📊 Testing

### Component Tests

File: `src/components/DateTimeChecker.test.jsx`

Tests bao gồm:
- ✅ Render component
- ✅ Display current time
- ✅ Update time every second
- ✅ Input handling
- ✅ Date calculation
- ✅ Past/Future time detection

### Test Configuration

- **Framework**: Vitest
- **Testing Library**: @testing-library/react
- **Environment**: jsdom
- **Coverage**: v8

## 🌐 Deployment

### GitHub Pages

Tự động deploy khi push vào `main`:
- URL: `https://<username>.github.io/<repo-name>/`

### Vercel

Deploy thủ công hoặc tự động:
- Trigger: Workflow dispatch
- URL: Được cung cấp sau deployment

## 📝 Git Workflow

### Branch Strategy

- `main`: Production branch
- `develop`: Development branch
- `feature/*`: Feature branches
- `bugfix/*`: Bug fix branches

### Commit Convention

Sử dụng semantic commit messages:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `test:` - Tests
- `chore:` - Maintenance
- `ci:` - CI/CD changes

Example:
```bash
git commit -m "feat: add time difference calculator"
git commit -m "fix: correct timezone display"
git commit -m "test: add component unit tests"
```

## 🔍 Monitoring

### Build Status

Xem build status badges trong README (có thể thêm):

```markdown
![CI](https://github.com/<username>/<repo>/workflows/CI%20-%20DateTimeChecker/badge.svg)
![CD](https://github.com/<username>/<repo>/workflows/CD%20-%20Deploy%20DateTimeChecker/badge.svg)
```

### Code Coverage

Coverage reports được tạo tự động và có thể tích hợp với Codecov.

## 🛡️ Security

- 🔒 Dependency audit trong scheduled tests
- 🔐 Secrets management với GitHub Secrets
- ✅ Security best practices

## 📚 Tài liệu thêm

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vitest Documentation](https://vitest.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Testing Library](https://testing-library.com/react)

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

MIT License

## 👨‍💻 Author

Dự án CI/CD demo cho DateTimeChecker

---

**Happy Coding! 🎉**
