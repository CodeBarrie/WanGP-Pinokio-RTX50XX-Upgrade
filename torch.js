module.exports = {
  run: [
    // Windows NVIDIA - PyTorch 2.10.0 with CUDA 13.0 for RTX 50XX (Python 3.11)
    {
      "when": "{{platform === 'win32'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision torchaudio {{args && args.xformers ? 'xformers' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall --no-deps",
          "{{args && args.triton ? 'uv pip install -U triton-windows' : ''}}",
          "{{args && args.sageattention ? 'uv pip install https://github.com/woct0rdho/SageAttention/releases/download/v2.2.0-windows.post4/sageattention-2.2.0+cu130torch2.9.0andhigher.post4-cp39-abi3-win_amd64.whl' : ''}}",
          "{{args && args.flashattention ? 'uv pip install https://github.com/deepbeepmeep/kernels/releases/download/Flash2/flash_attn-2.8.3-cp311-cp311-win_amd64.whl' : ''}}"
        ]
      }
    },
    // Linux NVIDIA - PyTorch 2.10.0 with CUDA 13.0 for RTX 50XX (Python 3.11)
    {
      "when": "{{platform === 'linux'}}",
      "method": "shell.run",
      "params": {
        "venv": "{{args && args.venv ? args.venv : null}}",
        "path": "{{args && args.path ? args.path : '.'}}",
        "message": [
          "uv pip install torch==2.10.0 torchvision torchaudio {{args && args.xformers ? 'xformers' : ''}} --index-url https://download.pytorch.org/whl/cu130 --force-reinstall",
          "{{args && args.triton ? 'uv pip install -U triton' : ''}}",
          "{{args && args.sageattention ? 'uv pip install sageattention --no-build-isolation' : ''}}",
          "{{args && args.flashattention ? 'uv pip install flash-attn --no-build-isolation' : ''}}"
        ]
      }
    }
  ]
}
