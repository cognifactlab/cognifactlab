# 🚀 AWS Amplify + GoDaddy Domain Setup Guide

## Your Setup
- **Domain**: cognifactlabs.in (purchased from GoDaddy)
- **Hosting**: AWS Amplify
- **Email**: cogniFactlab@gmail.com
- **Website**: https://cognifactlabs.in

---

## 📋 Prerequisites

✅ AWS Account (Free tier available)  
✅ GoDaddy Account with cognifactlabs.in domain  
✅ GitHub Account with your code pushed  
✅ Website code ready (✅ Done - Build successful)

---

## 🎯 Step-by-Step Deployment

### Step 1: Push Code to GitHub

```bash
# Add all changes
git add .

# Commit
git commit -m "Deploy to AWS Amplify with custom domain"

# Push to GitHub
git push origin main
```

---

### Step 2: Deploy to AWS Amplify

#### 2.1: Open AWS Amplify
1. Go to [AWS Console](https://console.aws.amazon.com/)
2. Sign in to your AWS account
3. Search for **"Amplify"** in the search bar
4. Click on **Amplify**

#### 2.2: Create New App
1. Click **"New app"** → **"Host web app"**
2. Click **"Get started"** under GitHub

#### 2.3: Connect GitHub
1. Click **"Connect branch"**
2. Authorize AWS Amplify to access your GitHub
3. Select your repository (cognifactlab or your repo name)
4. Select branch: **main**
5. Click **"Next"**

#### 2.4: Build Settings
AWS Amplify will auto-detect Vite. Verify these settings:

**Build settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

Click **"Next"**

#### 2.5: Review and Deploy
1. Review all settings
2. Click **"Save and deploy"**
3. Wait 2-3 minutes for deployment

#### 2.6: Get Your Amplify URL
After deployment, you'll get a URL like:
```
https://main.xxxxxx.amplifyapp.com
```

**Test this URL first** to make sure everything works!

---

### Step 3: Add Custom Domain (cognifactlabs.in)

#### 3.1: Add Domain in Amplify
1. In AWS Amplify console, click on your app
2. Go to **"Domain management"** (left sidebar)
3. Click **"Add domain"**
4. Enter: **cognifactlabs.in**
5. Click **"Configure domain"**

#### 3.2: Set Up DNS Records
Amplify will show you DNS records to add. You'll see something like:

**Root Domain:**
```
Type: A
Name: @
Value: [Amplify provides this IP]
```

**WWW Subdomain:**
```
Type: CNAME
Name: www
Value: xxxxxx.amplifyapp.com
```

**Copy these values** - you'll need them for GoDaddy.

---

### Step 4: Configure GoDaddy DNS

#### 4.1: Open GoDaddy DNS Management
1. Go to [GoDaddy](https://www.godaddy.com/)
2. Sign in to your account
3. Go to **"My Domains"**
4. Click on **cognifactlabs.in**
5. Click **"DNS"** or **"Manage DNS"**

#### 4.2: Add/Update DNS Records

**Delete existing records** (if any):
- Delete any existing A records for `@`
- Delete any existing CNAME records for `www`

**Add New Records:**

**Record 1 - Root Domain:**
```
Type: A
Name: @
Value: [IP from AWS Amplify]
TTL: 600 seconds (or 10 minutes)
```

**Record 2 - WWW Subdomain:**
```
Type: CNAME
Name: www
Value: [xxxxxx.amplifyapp.com from AWS]
TTL: 600 seconds (or 10 minutes)
```

**Record 3 - Redirect www to root (optional but recommended):**
```
Type: CNAME
Name: www
Value: cognifactlabs.in
TTL: 600 seconds
```

#### 4.3: Save Changes
- Click **"Save"** or **"Add"** for each record
- DNS changes can take 5 minutes to 48 hours to propagate
- Usually works within 15-30 minutes

---

### Step 5: Verify Domain in AWS Amplify

1. Go back to AWS Amplify → **Domain management**
2. Wait for DNS verification (can take 5-30 minutes)
3. You'll see status: **"Pending"** → **"Available"**
4. Once available, you'll see:
   ```
   ✅ cognifactlabs.in
   ✅ www.cognifactlabs.in
   ```

#### 5.1: Set Up Redirects (Recommended)
In AWS Amplify Domain Management:
1. Click on your domain
2. Go to **"Redirect settings"**
3. Set up:
   - `www.cognifactlabs.in` → redirect to `cognifactlabs.in`
   - OR vice versa (your choice)

---

### Step 6: SSL Certificate (Automatic)

✅ **AWS Amplify automatically provisions SSL certificates** via AWS Certificate Manager (ACM)  
✅ **Free SSL** - No additional cost  
✅ **Auto-renewal** - Certificates renew automatically  

You don't need to do anything - SSL is automatic!

---

## ✅ Final Verification Checklist

### Test Your Website:
- [ ] https://cognifactlabs.in loads correctly
- [ ] https://www.cognifactlabs.in loads correctly
- [ ] SSL certificate is active (look for 🔒 in browser)
- [ ] All pages load without errors
- [ ] Form submission works
- [ ] WhatsApp button works
- [ ] Mobile responsive

### Test Form Submission:
- [ ] Submit test form entry
- [ ] Check cogniFactlab@gmail.com inbox
- [ ] Verify all form fields are in email
- [ ] Test on mobile device

### Test Performance:
- [ ] Page loads in < 3 seconds
- [ ] All animations work smoothly
- [ ] 3D effects render correctly
- [ ] No console errors

---

## 💰 Cost Breakdown

### AWS Amplify (First 12 Months - Free Tier):
- ✅ **1,000 build minutes/month** - FREE
- ✅ **5 GB storage** - FREE
- ✅ **15 GB data transfer/month** - FREE

### After Free Tier (12 months):
- Build: $0.01/minute (~$1-5/month for your site)
- Storage: $0.023/GB/month (~$0.01/month)
- Data transfer: $0.15/GB/month (~$1-3/month for 10GB)

### Total Estimated Cost:
- **First 12 months**: **$0** (FREE)
- **After 12 months**: **~$2-8/month**

### Domain Cost:
- **cognifactlabs.in**: Already purchased from GoDaddy
- **Renewal**: ~₹800-1200/year (GoDaddy pricing)

---

## 🔧 Troubleshooting

### Issue: Domain not resolving
**Solution:**
- Wait 15-30 minutes for DNS propagation
- Check DNS records in GoDaddy are correct
- Use [dnschecker.org](https://dnschecker.org) to verify propagation
- Clear browser cache

### Issue: SSL certificate not working
**Solution:**
- Wait 30 minutes (AWS auto-provisions SSL)
- Check domain verification status in Amplify
- Ensure DNS records are correct

### Issue: Build fails in Amplify
**Solution:**
- Check build logs in Amplify console
- Verify `package.json` has correct build script
- Ensure all dependencies are in `package.json`
- Try manual build locally: `npm run build`

### Issue: Form not sending emails
**Solution:**
- Verify Web3Forms access key is correct
- Check browser console for errors
- Test form locally first
- Check Web3Forms dashboard for delivery status

---

## 📊 Monitoring & Analytics

### AWS Amplify Console:
- View deployment history
- Monitor build times
- Check error logs
- View traffic metrics

### Google Analytics (Optional):
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Auto-Deployment

✅ **AWS Amplify automatically deploys** when you push to GitHub  
✅ **Every push to main** triggers a new build  
✅ **Preview deployments** for feature branches (optional)

### To deploy updates:
```bash
# Make your changes
git add .
git commit -m "Update description"
git push origin main

# AWS Amplify will automatically build and deploy!
```

---

## 🎯 Custom Domain Email (Optional)

Want email like `hello@cognifactlabs.in`?

### Option 1: Zoho Mail (Free)
1. Go to [Zoho Mail](https://www.zoho.com/mail/)
2. Sign up for free plan
3. Add cognifactlabs.in domain
4. Update DNS records in GoDaddy
5. Create email: hello@cognifactlabs.in

### Option 2: Google Workspace (Paid)
1. Go to [Google Workspace](https://workspace.google.com/)
2. Sign up ($6/user/month)
3. Add cognifactlabs.in domain
4. Update DNS records
5. Create email: hello@cognifactlabs.in

---

## 📱 Mobile App (Future)

AWS Amplify also supports:
- React Native apps
- Flutter apps
- iOS/Android native apps

You can use the same Amplify backend for mobile apps later!

---

## 🆘 Support Resources

### AWS Amplify:
- [Documentation](https://docs.aws.amazon.com/amplify/)
- [AWS Support](https://console.aws.amazon.com/support/home)
- [Community Forums](https://repost.aws/)

### GoDaddy:
- [DNS Management Help](https://www.godaddy.com/help/manage-dns-680)
- [GoDaddy Support](https://www.godaddy.com/help)

### Web3Forms:
- [Documentation](https://web3forms.com/docs)
- Support: support@web3forms.com

---

## 🎉 Success Checklist

After deployment, verify:

- [ ] Website live at https://cognifactlabs.in
- [ ] SSL certificate active (🔒)
- [ ] www redirect working
- [ ] Form submissions going to Gmail
- [ ] WhatsApp button working
- [ ] All 3D effects rendering
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] No console errors
- [ ] Auto-deployment working

---

## 📞 Quick Reference

### Your Details:
- **Domain**: cognifactlabs.in
- **Hosting**: AWS Amplify
- **Email**: cogniFactlab@gmail.com
- **WhatsApp**: +91 88287 30908
- **Web3Forms Key**: 0e0b8193-e1ab-4cb3-82e4-1cc67c85fe31

### Important URLs:
- **Live Site**: https://cognifactlabs.in
- **AWS Console**: https://console.aws.amazon.com/amplify/
- **GoDaddy DNS**: https://dcc.godaddy.com/manage/dns
- **Web3Forms**: https://web3forms.com

---

## 🚀 Next Steps

1. ✅ Push code to GitHub
2. ✅ Deploy to AWS Amplify
3. ✅ Configure GoDaddy DNS
4. ✅ Test everything
5. ✅ Start promoting your website!

---

**Your website will be live at https://cognifactlabs.in within 30 minutes of completing these steps!** 🎉

**Total Cost**: FREE for first 12 months, then ~$2-8/month  
**Setup Time**: 30-60 minutes  
**Maintenance**: Zero (auto-deploys on git push)

---

**Last Updated**: 2026  
**Status**: Ready to Deploy  
**Domain**: cognifactlabs.in
