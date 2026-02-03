```
 __        __          ____  ____    ____   ___
 \ \      / /_ _ _ __ / ___|  _ \  | ___| / _ \__  ____  __
  \ \ /\ / / _` | '_ \| |  _| |_) | |___ \| | | \ \/ /\ \/ /
   \ V  V / (_| | | | | |_| |  __/   ___) | |_| |>  <  >  <
    \_/\_/ \__,_|_| |_|\____|_|     |____/ \___//_/\_\/_/\_\

    ╔═══════════════════════════════════════════════════════╗
    ║     RTX 50XX ONLY - TEMPORARY UPGRADE LAUNCHER        ║
    ╚═══════════════════════════════════════════════════════╝
```

# WanGP RTX 50XX Pinokio Launcher

**A temporary upgrade path for RTX 50XX users** following [DeepBeepMeep's](https://github.com/deepbeepmeep) explicit upgrade instructions for [WanGP v10.61](https://github.com/deepbeepmeep/Wan2GP).

This launcher is designed to work with the excellent [Pinokio](https://pinokio.computer/) one-click installer app to provide a safe and easy upgrade to **Python 3.11, PyTorch 2.10.0, and CUDA 13.0** for NVFP4 optimized kernel support.

---

## ⚠️ IMPORTANT: BACKUP YOUR FILES FIRST ⚠️

**The Reset step DELETES the entire `app/` folder. This includes:**

- **Downloaded Models** (Wan2.1 T2V, Wan2.2 I2V, LTX-2, Hunyuan, Flux, etc.)
- **Checkpoints** (`app/ckpts/`)
- **LoRAs** (`app/loras/`)
- **Settings** (`app/settings/`)

### Before you begin:
1. Copy your `app/ckpts/` folder somewhere safe
2. Copy your `app/loras/` folder somewhere safe
3. Copy any other files you want to keep

### After the upgrade:
- Copy your backed-up folders back into the new `app/` folder
- **OR** re-download your models through WanGP

---

## Who Is This For?

**RTX 50XX owners ONLY** who want to take advantage of:
- NVFP4 optimized kernels (30%+ faster generation)
- PyTorch 2.10.0 improvements (no memory leaks, better VAE decoding)
- Latest SageAttention, Triton, and Flash Attention support

If you have an **RTX 40XX or older**, stick with the standard Pinokio WanGP launcher.

---

## How To Use

### Step 1: Backup Your Files (DO THIS FIRST!)
Copy these folders somewhere safe before proceeding:
- `pinokio/api/wan.git/app/ckpts/`
- `pinokio/api/wan.git/app/loras/`

### Step 2: Copy These Files
Copy the following files into your existing Pinokio `wan.git` folder (usually at `pinokio/api/wan.git/`):
- `install.js`
- `torch.js`
- `update.js`
- `.gitignore`

### Step 3: Reset + Install + Update (in Pinokio)
1. **Open Pinokio** and navigate to WanGP
2. **Click "Reset"** - Removes the old `app/` folder (including your models!)
3. **Click "Install"** - Creates fresh Python 3.11 environment with PyTorch 2.10/CUDA 13.0
4. **Click "Update"** - Pulls the latest WanGP v10.61 code
5. **Click "Start"** - Launch WanGP!

![Pinokio Buttons](pinokio-buttons.png)
*These are the buttons you're looking for in the Pinokio sidebar*

### Step 4: Restore Your Files
Copy your backed-up `ckpts/` and `loras/` folders back into `pinokio/api/wan.git/app/`

---

## Changes From Original Launcher

| File | What Changed |
|------|--------------|
| `install.js` | Added `venv_python: "3.11"`, enabled all acceleration packages |
| `torch.js` | Complete rewrite for PyTorch 2.10.0+cu130 and new wheel URLs |
| `update.js` | No changes from original |
| `.gitignore` | New file to exclude app/, cache/, logs/, .claude/ |

---

## What Gets Installed

| Component | Version |
|-----------|---------|
| Python | 3.11 |
| PyTorch | 2.10.0+cu130 |
| CUDA | 13.0 |
| SageAttention | 2.2.0 (cu130) |
| Triton | Latest |
| Flash Attention | 2.8.3 |
| xformers | Latest |

---

## Credits

- **[DeepBeepMeep](https://github.com/deepbeepmeep)** - Creator of WanGP
- **[Pinokio](https://pinokio.computer/)** - One-click installer platform
- **[WanGP Discord](https://discord.gg/g7efUW9jGV)** - Community support

---

## Disclaimer

This is a **community-contributed temporary upgrade path** based on DeepBeepMeep's official upgrade instructions. Once Pinokio's official WanGP launcher is updated for RTX 50XX, this repo may become obsolete.

**Use at your own risk. Always backup your files before resetting!**
