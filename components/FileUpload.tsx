// File Upload Component - Add to FinalCTA.tsx
import React, { useState, useRef } from 'react';

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  maxSizePerFile?: number; // in MB
  maxTotalSize?: number; // in MB
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  onFilesChange, 
  maxFiles = 5, 
  maxSizePerFile = 5, 
  maxTotalSize = 20 
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'text/plain': '.txt',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'image/gif': '.gif',
    'application/zip': '.zip',
    'application/x-rar-compressed': '.rar'
  };

  const validateFile = (file: File): string[] => {
    const errors: string[] = [];

    // Check file type
    if (!allowedTypes[file.type as keyof typeof allowedTypes]) {
      errors.push(`${file.name}: Неподдържан формат. Разрешени: PDF, DOC, DOCX, TXT, JPEG, PNG, GIF, ZIP, RAR`);
    }

    // Check file size
    const sizeInMB = file.size / (1024 * 1024);
    if (sizeInMB > maxSizePerFile) {
      errors.push(`${file.name}: Файлът е твърде голям (${sizeInMB.toFixed(1)}MB). Максимум ${maxSizePerFile}MB`);
    }

    return errors;
  };

  const handleFiles = (files: FileList) => {
    const newFiles = Array.from(files);
    const allErrors: string[] = [];

    // Check max files limit
    if (selectedFiles.length + newFiles.length > maxFiles) {
      allErrors.push(`Максимум ${maxFiles} файла. Моля премахнете някои файлове.`);
      setErrors(allErrors);
      return;
    }

    // Validate each file
    const validFiles: File[] = [];
    newFiles.forEach(file => {
      const fileErrors = validateFile(file);
      if (fileErrors.length === 0) {
        validFiles.push(file);
      } else {
        allErrors.push(...fileErrors);
      }
    });

    // Check total size
    const totalSize = [...selectedFiles, ...validFiles].reduce((sum, file) => sum + file.size, 0);
    const totalSizeInMB = totalSize / (1024 * 1024);

    if (totalSizeInMB > maxTotalSize) {
      allErrors.push(`Общият размер на файловете е твърде голям (${totalSizeInMB.toFixed(1)}MB). Максимум ${maxTotalSize}MB`);
      setErrors(allErrors);
      return;
    }

    // Update files
    if (validFiles.length > 0) {
      const updatedFiles = [...selectedFiles, ...validFiles];
      setSelectedFiles(updatedFiles);
      onFilesChange(updatedFiles);
    }

    setErrors(allErrors);
  };

  const removeFile = (index: number) => {
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(updatedFiles);
    onFilesChange(updatedFiles);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="mb-6">
      <label className="block text-white font-semibold mb-3">
        📎 Прикачени файлове (незадължително)
      </label>

      {/* Drag & Drop Zone */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all duration-200 ${
          dragActive 
            ? 'border-yellow-400 bg-yellow-50 bg-opacity-20' 
            : 'border-gray-300 bg-white bg-opacity-10'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
        />

        <div className="text-white">
          <div className="text-3xl mb-2">📁</div>
          <p className="font-semibold mb-2">
            Пуснете файловете тук или 
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="text-yellow-300 hover:text-yellow-400 underline ml-1"
            >
              изберете файлове
            </button>
          </p>
          <p className="text-sm text-blue-200">
            Максимум {maxFiles} файла • {maxSizePerFile}MB на файл • {maxTotalSize}MB общо
          </p>
          <p className="text-xs text-blue-300 mt-1">
            Поддържани формати: PDF, DOC, DOCX, TXT, JPEG, PNG, GIF, ZIP, RAR
          </p>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="mt-3 p-3 bg-red-500 bg-opacity-20 border border-red-400 rounded">
          {errors.map((error, index) => (
            <p key={index} className="text-red-200 text-sm">{error}</p>
          ))}
        </div>
      )}

      {/* Selected Files */}
      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <p className="text-white font-semibold mb-2">Избрани файлове:</p>
          <div className="space-y-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between bg-white bg-opacity-10 rounded p-3">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📄</span>
                  <div>
                    <p className="text-white font-medium text-sm">{file.name}</p>
                    <p className="text-blue-200 text-xs">{formatFileSize(file.size)}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-300 hover:text-red-400 transition-colors"
                  title="Премахни файл"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-2 text-right">
            <p className="text-blue-200 text-sm">
              Общо: {selectedFiles.length}/{maxFiles} файла • {
                formatFileSize(selectedFiles.reduce((sum, file) => sum + file.size, 0))
              }/{maxTotalSize}MB
            </p>
          </div>
        </div>
      )}

      {/* Help Text */}
      <div className="mt-3 text-xs text-blue-300">
        💡 <strong>Съвет:</strong> За повече от {maxFiles} файла или неподдържани формати, зипнете ги или ги споменете в съобщението. Ще се свържем с вас за получаването им.
      </div>
    </div>
  );
};

export default FileUpload;